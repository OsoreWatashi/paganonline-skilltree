import { INode } from '@/types';

export default [
  { name: 'Whiplash', levelRequirement: 1, minimumPoints: 1, maximumPoints: 1, children: [
    { name: 'Blood Clot', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1 },
    { name: 'Quick Fix', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1 },
    { name: 'Bloodboil Explosion', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1 }
  ] },
  { name: 'Bloodsucker', levelRequirement: 2, minimumPoints: 0, maximumPoints: 3, children: [
    { name: 'Infusion I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Infusion II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Infusion III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Blood Force', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Animalistic Speed I', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Animalistic Speed II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Animalistic Speed III', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Panic', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'A bite from beyond I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'A bite from beyond II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'A bite from beyond III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Extreme Gore', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] }
  ] },
  { name: 'Swarm', levelRequirement: 6, minimumPoints: 0, maximumPoints: 3, children: [
    { name: 'Decay I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Spawn of Darkness', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'For the Swarm I', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'For the Swarm I', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'For the Swarm II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Vortex', levelRequirement: 11 , minimumPoints: 0, maximumPoints: 1}
        ] }
      ] }
    ] },
    { name: 'Protection of Flesh I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Protection of Flesh I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Protection of Flesh II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Protection of Flesh III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
            { name: 'Rejuvenation', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1 }
          ] }
        ] }
      ] }
    ] }
  ] },
  { name: 'Bloodbolt', levelRequirement: 9, minimumPoints: 0, maximumPoints: 3, children: [
    { name: 'Sticky Blood I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Sticky Blood II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Sticky Blood III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Piercer', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Fountain of Youth I', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Fountain of Youth II', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Fountain of Youth III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Bloodchill Explosion', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Longevity I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Longevity II', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Longevity III', levelRequirement: 15, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Carnage', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] }
  ] },
  { name: 'Heartbeat', levelRequirement: 12, minimumPoints: 0, maximumPoints: 3, children: [
    { name: 'Pulse I', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Pulse II', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Pulse III', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Heart-throb', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Heavy Heart I', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Heavy Heart II', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Heavy Heart III', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Restoration', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Warmth I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Warmth II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Warmth III', levelRequirement: 25, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Mass Effect', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] }
  ] },
  { name: 'Blood Spikes', levelRequirement: 17, minimumPoints: 0, maximumPoints: 3, children: [
    { name: 'Gore Tentacles I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Gore Tentacles II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Gore Tentacles III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Sanguine Protection', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Mass Murder I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Mass Murder II', levelRequirement: 20, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Mass Murder III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Cold Blooded', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Pain and Suffering I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Pain and Suffering II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Pain and Suffering III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Bloodfreeze', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] }
  ] },
  { name: 'Altar of Gore', levelRequirement: 19, minimumPoints: 0, maximumPoints: 3, children: [
    { name: 'Quick Lashes I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Quick Lashes II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Quick Lashes III', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Sustenance', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'All About Range I', levelRequirement: 21, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'All About Range II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'All About Range III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Blood Efficiency', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] },
    { name: 'Sanguine Longevity I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
      { name: 'Sanguine Longevity II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
        { name: 'Sanguine Longevity III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, children: [
          { name: 'Corruption of Gore', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
        ] }
      ] }
    ] }
  ] }
] as INode[];
