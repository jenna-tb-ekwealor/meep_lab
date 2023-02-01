---
widget: slider
weight: 2
active: true
headless: true

design:
  # Slide height is automatic unless you force a specific height (e.g. '400px')
  slide_height: '300px'
  is_fullscreen: false
  # Automatically transition through slides?
  loop: true
  # Duration of transition between slides (in ms)
  interval: 8000

content:
  slides:
    - title: Welcome!
      content: The SFSU MEEP Lab investigates moss adaptations to the desiccating and irradiating coniditions of life on land. 
      align: center
      background:
        position: right
        color: '#666'
        brightness: 0.7
        media: contact.jpg
    - title: MEEP Lab
      content: 'Current and past members'
      align: left
      background:
        position: left
        color: '#555'
        brightness: 0.7
        media: cani.png
      link:
        icon: face-awesome
        icon_pack: fas
        text: Who we are
        url: ../people/
    - title: Interested in our research?
      content: 'We are now recruiting undergraduate and masters students to start in Fall 2024.'
      align: left
      background:
        position: right
        color: '#555'
        brightness: 0.7
        media: contact.jpg
      link:
        icon: face-awesome
        icon_pack: fas
        text: Join the lab!
        url: ../contact/
        
        
---
