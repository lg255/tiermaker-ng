import { Component, Input, OnInit } from '@angular/core';
import { Tier } from '../models';
import { TiersService } from './tiers.service';

@Component({
  selector: 'app-tier-selector',
  templateUrl: './tier-selector.component.html',
  styleUrls: ['./tier-selector.component.scss'],
})
export class TierSelectorComponent implements OnInit {
  tiers: Tier[] = [];
  imageUrls: string[] = [];

  constructor(private tiersService: TiersService) {}

  ngOnInit(): void {
    this.tiersService.getAvailableTiers().subscribe((tiers) => {
      this.tiers = tiers;
      const defaultTier = tiers.find((tier) => tier.default);
      if (defaultTier) {
        this.tiersService.setSelectedTier(defaultTier.value);
      }
    });
  }

  changeSelectedTier(event: Event) {
    this.tiersService.setSelectedTier(
      (event.target as HTMLSelectElement).value
    );
  }
}
