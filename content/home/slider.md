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
    - title: MEEP Lab
      content: 'Current and past members'
      align: left
      background:
        position: left
        color: '#555'
        brightness: 0.7
        media: cani.png
      link:
        text: Who we are
        url: ../people/
    - title: Our most recent publication
      content: 'We synthesize current knowledge on desiccation tolerance and outline a roadmap to accelerate research and unlock its potential for climate resilience, agriculture, and health.'
      align: right
      background:
        position: center
        color: '#555'
        brightness: 0.7
        media: canespring.JPG
      link:
        text: Read more
        url: ../publication/2025_natcomms_dry/
    - title: Interested in our research?
      content: 'Now recruiting masters students to start in Fall 2025'
      align: left
      background:
        position: right
        color: '#555'
        brightness: 0.7
        media: fieldwork_crop.jpg
      link:
        text: Join the lab!
        url: ../contact/        
---
