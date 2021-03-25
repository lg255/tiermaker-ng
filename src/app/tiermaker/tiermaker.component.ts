import { Component, OnInit } from '@angular/core';
import { Tier } from './models';

@Component({
  selector: 'app-tiermaker',
  templateUrl: './tiermaker.component.html',
  styleUrls: ['./tiermaker.component.scss'],
})
export class TiermakerComponent implements OnInit {
  loadedTiers: Tier[] = [];

  constructor() {}

  ngOnInit(): void {}
}
