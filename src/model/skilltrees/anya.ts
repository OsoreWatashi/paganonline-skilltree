import { INode } from '@/types';

export default [
  { name: 'Whiplash', levelRequirement: 1, minimumPoints: 1, maximumPoints: 1, iconName: 'whiplash', children: [
    { name: 'Blood Clot', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, iconName: 'major' },
    { name: 'Quick Fix', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1, iconName: 'major' },
    { name: 'Bloodboil Explosion', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
  ] },
  { name: 'Bloodsucker', levelRequirement: 2, minimumPoints: 0, maximumPoints: 3, iconName: 'bloodsucker', children: [
    { name: 'Infusion I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Infusion II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Infusion III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Blood Force', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Animalistic Speed I', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Animalistic Speed II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Animalistic Speed III', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Panic', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'A bite from beyond I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'A bite from beyond II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'A bite from beyond III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Extreme Gore', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Swarm', levelRequirement: 6, minimumPoints: 0, maximumPoints: 3, iconName: 'swarm', children: [
    { name: 'Decay I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Spawn of Darkness', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'For the Swarm I', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'For the Swarm I', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'For the Swarm II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Vortex', levelRequirement: 11 , minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Protection of Flesh I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Protection of Flesh II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Protection of Flesh III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Rejuvenation', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Bloodbolt', levelRequirement: 9, minimumPoints: 0, maximumPoints: 3, iconName: 'bloodbolt', children: [
    { name: 'Sticky Blood I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Sticky Blood II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Sticky Blood III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Piercer', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Fountain of Youth I', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Fountain of Youth II', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Fountain of Youth III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Bloodchill Explosion', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Longevity I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Longevity II', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Longevity III', levelRequirement: 15, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Carnage', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Heartbeat', levelRequirement: 12, minimumPoints: 0, maximumPoints: 3, iconName: 'heartbeat', children: [
    { name: 'Pulse I', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Pulse II', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Pulse III', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Heart-throb', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Heavy Heart I', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Heavy Heart II', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Heavy Heart III', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Restoration', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Warmth I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Warmth II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Warmth III', levelRequirement: 25, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Mass Effect', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Blood Spikes', levelRequirement: 17, minimumPoints: 0, maximumPoints: 3, iconName: 'bloodspikes', children: [
    { name: 'Gore Tentacles I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Gore Tentacles II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Gore Tentacles III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Sanguine Protection', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Mass Murder I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Mass Murder II', levelRequirement: 20, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Mass Murder III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Cold Blooded', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Pain and Suffering I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Pain and Suffering II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Pain and Suffering III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Bloodfreeze', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Altar of Gore', levelRequirement: 19, minimumPoints: 0, maximumPoints: 3, iconName: 'altarofgore', children: [
    { name: 'Quick Lashes I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Quick Lashes II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Quick Lashes III', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Sustenance', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'All About Range I', levelRequirement: 21, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'All About Range II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'All About Range III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Blood Efficiency', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] },
    { name: 'Sanguine Longevity I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
      { name: 'Sanguine Longevity II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
        { name: 'Sanguine Longevity III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', children: [
          { name: 'Corruption of Gore', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major' }
        ] }
      ] }
    ] }
  ] }
] as INode[];
