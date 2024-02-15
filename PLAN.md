# Plan

- [ ] Skeleton UI
  - [x] Tree list component
  - [ ] Photo List Item
  - [ ] Photo list
  - [x] Theme toggle
- [ ] Refinement
  - [ ] Tree list accessibility with keyboard
  - [ ] Photo list accessibility with keyboard
  - [ ] Initial load size
  - [ ] Documentation
  - [x] Export CSS token
  - [ ] API batch loading through DataLoader
  - [ ] Virtualization

## Observations

### API

- Lack of metadata for breed or individual image, forcing app to convert implicit (unreliable) data
- Lack of paginated list (large volume of)
- Batch loading (reduced network-spam) and more likely better system throughput
- Photo lacks cropping hint, sometimes images would be cropped at less-optimal location

### Mockup

- Some spacings are 5-based, such as space between tiles, or space between icon and label
- Some spacings are 4-based, space between dog name & pictures
