---
widget: slider
weight: 2
active: true
headless: true

design:
  # Slide height is automatic unless you force a specific height (e.g. '400px')
  slide_height: '350px'
  is_fullscreen: false
  # Automatically transition through slides?
  loop: true
  # Duration of transition between slides (in ms)
  interval: 8000

content:
  slides:
    - title: 
      content: The SFSU MEEP Lab investigates moss adaptations to the desiccating and irradiating conditions of life on land
      align: center
      background:
        position: right
        color: '#666'
        brightness: 0.7
        media: lava.jpg

    - title: New publication!
      content: 'The desert moss *Syntrichia caninervis* can revive even after 17 years of desiccation. Exposure to moderate humidity improves survival and speeds regeneration.'
      align: right
      background:
        position: center
        color: '#555'
        brightness: 0.7
        media: cani.png
      link:
        text: Read more
        url: ../publication/2025_natcomms_dry/
    - title: Welcome new lab members!
      content: '5 new graduate students and 1 post-bac researcher joining Fall 2025!'
      align: left
      background:
        position: right
        color: '#555'
        brightness: 0.7
        media: fieldwork_crop.jpg
      link:
        text: See lab members
        url: ../people/        
---


<!-- 
    - title: MEEP Lab
      content: 'Current and past members'
      align: left
      background:
        position: left
        color: '#555'
        brightness: 0.7
        media: cani.png or canespring.JPG
      link:
        text: Who we are
        url: ../people/
 -->
