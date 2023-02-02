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
    - title: Welcome!
      content: The SFSU MEEP Lab investigates moss adaptations to the desiccating and irradiating coniditions of life on land
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
      content: 'A technique to determine genotypic sex in the highly clonal <i>Syntrichia caninervis</i>, and the results of a case study examining genotypic and phenotypic sex ratios'
      align: right
      background:
        position: center
        color: '#555'
        brightness: 0.7
        media: syntrichiasporos.JPG
      link:
        text: Read more
        url: ../publication/2022_apps_rflp/
    - title: Interested in our research?
      content: 'We are now recruiting undergraduate and masters students to start in Fall 2024'
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
