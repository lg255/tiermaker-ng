import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../../shared/storage-service.service';
import { StoredImages } from '../models';
import { TiersService } from '../tier-selector/tiers.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss'],
})
export class PoolComponent implements OnInit {
  imageUrls: string[] = [];

  constructor(
    private tiersService: TiersService,
    private stroageService: StorageServiceService
  ) {}

  ngOnInit(): void {
    this.tiersService.selectedTierObservable.subscribe((selectedTier) =>
      this.loadTierImages(selectedTier)
    );
  }

  loadTierImages(selectedTier: string) {
    this.imageUrls = this.getImageUrlsFromStore(selectedTier);

    if (this.imageUrls.length > 0) {
      return;
    }

    const imagesObservable = this.tiersService.getImages(selectedTier);
    if (!imagesObservable) {
      return;
    }

    imagesObservable.subscribe((imageUrls) => {
      if (!imageUrls || imageUrls.length === 0) return;

      this.imageUrls = imageUrls;
      this.addImageUrlsToStore(selectedTier, imageUrls);
    });
  }

  private getImageUrlsFromStore(selectedTier: string): string[] {
    const imagesFromStorage = this.stroageService.getValue('imageUrls');
    if (imagesFromStorage) {
      const storedImages = JSON.parse(imagesFromStorage) as StoredImages[];
      const storedImage = storedImages.find((si) => si.tier === selectedTier);
      if (storedImage) {
        return storedImage.imageUrls;
      }
    }
    return [];
  }

  private addImageUrlsToStore(selectedTier: string, imageUrls: string[]) {
    const imagesFromStorage = this.stroageService.getValue('imageUrls');

    if (imagesFromStorage) {
      const storedImages = JSON.parse(imagesFromStorage) as StoredImages[];
      if (!storedImages.find((stored) => stored.tier === selectedTier)) {
        storedImages.push({ tier: selectedTier, imageUrls });
        this.stroageService.setValue('imageUrls', JSON.stringify(storedImages));
      }
      return;
    }

    this.stroageService.setValue(
      'imageUrls',
      JSON.stringify([{ tier: selectedTier, imageUrls }])
    );
  }
}
