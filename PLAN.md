# Plan

- [ ] Skeleton UI
  - [x] Tree list component
  - [x] Photo List Item
  - [x] Photo list
  - [x] Theme toggle
- [ ] Refinement
  - [ ] Tree list accessibility with keyboard
  - [ ] Photo list accessibility with keyboard
  - [ ] Initial load size
  - [ ] Documentation
  - [x] Export CSS token
  - [ ] API batch loading through DataLoader
  - [ ] Virtualization
  - [ ] Localization

## Observations

### API

- Lack of metadata for breed or individual image, forcing app to convert implicit (unreliable) data
- Lack of paginated list (large volume of)
- Batch loading (reduced network-spam) and more likely better system throughput
- Photo lacks cropping hint, sometimes images would be cropped at less-optimal location

### Mockup

Below are ambiguities discovered while implementing the application, they can be resolved through
working closely with designer to gain clarities

- Spacing language
  - Some spacings are 5-based, such as space between tiles, or space between icon and label
  - Some spacings are 4-based, space between dog name & pictures
  - Need to check
- Responsive behavior
  - How should UI behaves when browser resize
  - Logo and Image Card variants, when would they be used?
- Dark mode
  - There is no dark mode design
- Design tokens
