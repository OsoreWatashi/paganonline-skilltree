import { INode } from '@/types';

export default [
  { name: 'Whiplash', levelRequirement: 1, minimumPoints: 1, maximumPoints: 1, iconName: 'whiplash', description: 'A furious long range whip combo.', children: [
    { name: 'Blood Clot', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Last combo hit has 20% chance to spaw blood fragment.' },
    { name: 'Quick Fix', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Each combo hit reduces Vitality Rush cooldown by 0.3s.' },
    { name: 'Bloodboil Explosion', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Last combo hit has 20% chance to cause enemies to explode when dying for 100% physical damage in 3m radius.' }
  ] },
  { name: 'Bloodsucker', levelRequirement: 2, minimumPoints: 0, maximumPoints: 3, iconName: 'bloodsucker', description: 'Send out a huge blood bat that inflicts damage to all enemies it passes through and then returns to the caster, helaing it for every enemy hit.', effects: ['Physical Damage 200%', 'Range 8m', 'Life Leech 3%'], children: [
    { name: 'Infusion I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Additional Life Leech per enemy hit', effects: ['Life Leech 1%'], children: [
      { name: 'Infusion II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Additional Life Leech per enemy hit', effects: ['Life Leech 1%'], children: [
        { name: 'Infusion III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Additional Life Leech per enemy hit', effects: ['Life Leech 1%'], children: [
          { name: 'Blood Force', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'If an enemy is hit twice with the same bat and it does not die, it drops a blood fragment' }
        ] }
      ] }
    ] },
    { name: 'Animalistic Speed I', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Gain move speed buff for 5 seconds for each enemy hit.', effects: ['Increase movement speed 1%'], children: [
      { name: 'Animalistic Speed II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Gain move speed buff for 5 seconds for each enemy hit.', effects: ['Increase movement speed 1%'], children: [
        { name: 'Animalistic Speed III', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Gain move speed buff for 5 seconds for each enemy hit.', effects: ['Increase movement speed 1%'], children: [
          { name: 'Panic', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Recast bloodsucker to detonate it and fear all enemies for 4s.' }
        ] }
      ] }
    ] },
    { name: 'A bite from beyond I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Range increased', effects: ['Range 1m'], children: [
      { name: 'A bite from beyond II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Range increased', effects: ['Range 1m'], children: [
        { name: 'A bite from beyond III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Range increased', effects: ['Range 1m'], children: [
          { name: 'Extreme Gore', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Double damage to targets affected with Bleed.' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Swarm', levelRequirement: 6, minimumPoints: 0, maximumPoints: 3, iconName: 'swarm', description: 'Summon a swarm of bats that inflicts bleed and to any enemy that enters the area.', effects: ['Physical Damage 80%', 'Target AoE Radius 2.5m', 'Swarm Duration 5s'], children: [
    { name: 'Decay I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Swarm also inflics Slow', effects: ['Slow 30%', 'Swarm Duration 3s'], children: [
      { name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Swarm also inflics Slow', effects: ['Slow 10%', 'Swarm Duration 1s'], children: [
        { name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Swarm also inflics Slow', effects: ['Slow 10%', 'Swarm Duration 1s'], children: [
          { name: 'Spawn of Darkness', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'When the swarm expires, one Level 1 Bloodsucker spaws from its center, and fiels towards the nearest living enemy.' }
        ] }
      ] }
    ] },
    { name: 'For the Swarm I', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'AoE Radius inclreased', effects: ['Range 1m'], children: [
      { name: 'For the Swarm I', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'AoE Radius inclreased', effects: ['Range 1m'], children: [
        { name: 'For the Swarm II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'AoE Radius inclreased', effects: ['Range 1m'], children: [
          { name: 'Vortex', levelRequirement: 11 , minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'When swapm expires it pulls all enemies in 10m radius towards it.' }
        ] }
      ] }
    ] },
    { name: 'Protection of Flesh I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'All allies receive physical and elemental resistances when standing in the Swarm.', effects: ['Physical damage reduction 10%', 'Elemental resistances 10%'], children: [
      { name: 'Protection of Flesh II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'All allies receive physical and elemental resistances when standing in the Swarm.', effects: ['Physical damage reduction 10%', 'Elemental resistances 10%'], children: [
        { name: 'Protection of Flesh III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'All allies receive physical and elemental resistances when standing in the Swarm.', effects: ['Physical damage reduction 10%', 'Elemental resistances 10%'], children: [
          { name: 'Rejuvenation', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'When swarm expires it heals you and all allies in 10m radius for 10% of their maximum health.' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Bloodbolt', levelRequirement: 9, minimumPoints: 0, maximumPoints: 3, iconName: 'bloodbolt', description: 'Expend your own blood and cast a powerful projectile that explodes for small AoE when it hits an enemy. The projectile explodes leaving blood fragments on theground.', effects: ['Physical damage 300%', 'Range 10m', 'Blood Fragments generated 5', 'Health cost: 20% of maximum health'], children: [
    { name: 'Sticky Blood I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Bloodbolt als roots enemies.', effects: ['Root duration 2s'], children: [
      { name: 'Sticky Blood II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Bloodbolt als roots enemies.', effects: ['Root duration 1s'], children: [
        { name: 'Sticky Blood III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Bloodbolt als roots enemies.', effects: ['Root duration 1s'], children: [
          { name: 'Piercer', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Bloodbolt does not explode when hitting an enemy. Instead it passes through all enemies.' }
        ] }
      ] }
    ] },
    { name: 'Fountain of Youth I', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Addition Blood fragments generated.', effects: ['Blood Fragments generated 1'], children: [
      { name: 'Fountain of Youth II', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Addition Blood fragments generated.', effects: ['Blood Fragments generated 1'], children: [
        { name: 'Fountain of Youth III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Addition Blood fragments generated.', effects: ['Blood Fragments generated 1'], children: [
          { name: 'Bloodchill Explosion', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Each blood fragment that is generated by Bloodbolt explodes after 2s for 80% cold damage.' }
        ] }
      ] }
    ] },
    { name: 'Longevity I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Health cost decreased', effects: ['Health cost -4%'], children: [
      { name: 'Longevity II', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Health cost decreased', effects: ['Health cost -4%'], children: [
        { name: 'Longevity III', levelRequirement: 15, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Health cost decreased', effects: ['Health cost -4%'], children: [
          { name: 'Carnage', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Bloodbolt gains 3 charges.' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Heartbeat', levelRequirement: 12, minimumPoints: 0, maximumPoints: 3, iconName: 'heartbeat', description: 'Summon a huge beating heart that explodes after a short period, dealing massive damage in the area around it. Hitting the heart with primary attacks makes the feccet more powerful.', effects: ['Physical Damage 400%', 'Target AoE radius 5m', 'Each Primary hit delays heart explosion by 0.2s, increases total damage by 50%'], children: [
    { name: 'Pulse I', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit also expands the radius.', effects: ['Range 0.4m'], children: [
      { name: 'Pulse II', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit also expands the radius.', effects: ['Range 0.4m'], children: [
        { name: 'Pulse III', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit also expands the radius.', effects: ['Range 0.4m'], children: [
          { name: 'Heart-throb', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Double damage to targets afflicted by stun.' }
        ] }
      ] }
    ] },
    { name: 'Heavy Heart I', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit also roots enemies.', effects: ['Root duration 0.3s'], children: [
      { name: 'Heavy Heart II', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit also roots enemies.', effects: ['Root duration 0.3s'], children: [
        { name: 'Heavy Heart III', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit also roots enemies.', effects: ['Root duration 0.3s'], children: [
          { name: 'Restoration', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Heartbeat explosion heals you and allies for 50% of max health.' }
        ] }
      ] }
    ] },
    { name: 'Warmth I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit heals you and all allies.', effects: ['Heal bonus per enemy affected 1%'], children: [
      { name: 'Warmth II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit heals you and all allies.', effects: ['Heal bonus per enemy affected 1%'], children: [
        { name: 'Warmth III', levelRequirement: 25, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Each primary hit heals you and all allies.', effects: ['Heal bonus per enemy affected 1%'], children: [
          { name: 'Mass Effect', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'After casting Heartbeat, you can recast it for 3s to spawn another heart.' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Blood Spikes', levelRequirement: 17, minimumPoints: 0, maximumPoints: 3, iconName: 'bloodspikes', description: 'Summon blood spikes from the ground to impale enemies, inflicting stun and low damage over time.', effects: ['Physical damage per second 40%', 'Range 5m', 'Duration 3s', 'Max impaled enemies 5'], children: [
    { name: 'Gore Tentacles I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Increased radius', effects: ['Range 1m'], children: [
      { name: 'Gore Tentacles II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Increased radius', effects: ['Range 1m'], children: [
        { name: 'Gore Tentacles III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Increased radius', effects: ['Range 1m'], children: [
          { name: 'Sanguine Protection', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Gain 5% physical damage reduction and 5% to all elemental resists for the duration of Blood Spikes for each enemy impaled.' }
        ] }
      ] }
    ] },
    { name: 'Mass Murder I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Max impaled enemies increased.', effects: ['Max impaled enemies 1'], children: [
      { name: 'Mass Murder II', levelRequirement: 20, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Max impaled enemies increased.', effects: ['Max impaled enemies 1'], children: [
        { name: 'Mass Murder III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Max impaled enemies increased.', effects: ['Max impaled enemies 1'], children: [
          { name: 'Cold Blooded', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'After Blood Spikes retract the ground freezes and deals 100% Cold Damage each second for 4 seconds.' }
        ] }
      ] }
    ] },
    { name: 'Pain and Suffering I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Damage further increased', effects: ['Physical damage 20%'], children: [
      { name: 'Pain and Suffering II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Damage further increased', effects: ['Physical damage 20%'], children: [
        { name: 'Pain and Suffering III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Damage further increased', effects: ['Physical damage 20%'], children: [
          { name: 'Bloodfreeze', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Instead of stunnig all enemies for a duration, instantly deal 400% cold damage to all enemies.' }
        ] }
      ] }
    ] }
  ] },
  { name: 'Altar of Gore', levelRequirement: 19, minimumPoints: 0, maximumPoints: 3, iconName: 'altarofgore', description: 'Impale single enemy on a blood spear and make a blood alter out of it. Enemy is stunned for the duration and receives continious damage while all allies in the radius leech health.', effects: ['Enemy max health damage 6%', 'Life leech 3%', 'Range 8m', 'Duration 5s'], children: [
    { name: 'Quick Lashes I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Attack speed increased during life leech.', effects: ['Attack speed bonus 3%'], children: [
      { name: 'Quick Lashes II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Attack speed increased during life leech.', effects: ['Attack speed bonus 3%'], children: [
        { name: 'Quick Lashes III', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Attack speed increased during life leech.', effects: ['Attack speed bonus 3%'], children: [
          { name: 'Sustenance', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'If enemy dies while impaled all allies are healed instantly for 10% of their max health.' }
        ] }
      ] }
    ] },
    { name: 'All About Range I', levelRequirement: 21, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Radius increased', effects: ['Range 1.5m'], children: [
      { name: 'All About Range II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Radius increased', effects: ['Range 1.5m'], children: [
        { name: 'All About Range III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Radius increased', effects: ['Range 1.5m'], children: [
          { name: 'Blood Efficiency', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'Blood Altar gains 1 additional charge.' }
        ] }
      ] }
    ] },
    { name: 'Sanguine Longevity I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Duration increased.', effects: ['Duration 1s'], children: [
      { name: 'Sanguine Longevity II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Duration increased.', effects: ['Duration 1s'], children: [
        { name: 'Sanguine Longevity III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, iconName: 'minor', description: 'Duration increased.', effects: ['Duration 1s'], children: [
          { name: 'Corruption of Gore', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1, iconName: 'major', description: 'If an enemy dies while impaled it explodes for 450% cold damage, affecting all enemies in the Blood Altar radius.' }
        ] }
      ] }
    ] }
  ] }
] as INode[];
