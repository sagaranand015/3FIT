### Gym Contract calls

GymStore SC deployed to `0xf8228E24F6c6F53cB22af72192114bB58022918B`

#### Get GymStore Contract
const g = await ethers.getContractFactory("GymStore");
const gymStore = await g.attach("0xf8228E24F6c6F53cB22af72192114bB58022918B");


#### GymStore Contract function calls
```
const storeCreatedRes = await gymStore.createStore('Anytime Fitness Gym', 'ipfs://bafkreicbbj3cxhq75hwoh37livm7fdgh7z4hycbunsuqkjkkjwegon27y4', 'Bangalore, India', 'ipfs://bafkreicbbj3cxhq75hwoh37livm7fdgh7z4hycbunsuqkjkkjwegon27y4')

const storeCreatedRes = await gymStore.createStore('Zero Gravity Health Club', 'ipfs://bafkreicbbj3cxhq75hwoh37livm7fdgh7z4hycbunsuqkjkkjwegon27y4', 'New Delhi, India', 'ipfs://bafkreicbbj3cxhq75hwoh37livm7fdgh7z4hycbunsuqkjkkjwegon27y4')

const storeCreatedRes = await gymStore.createStore('Divine Fitness Health Club', 'ipfs://bafkreicbbj3cxhq75hwoh37livm7fdgh7z4hycbunsuqkjkkjwegon27y4', 'Mumbai, India', 'ipfs://bafkreicbbj3cxhq75hwoh37livm7fdgh7z4hycbunsuqkjkkjwegon27y4')
```

2. `const ownerStoreRes = await gymStore.getOwnerStore('0xf4267F20B463421D2cF3db534491b7920F79Ac4F')`

2. `const storeNumRes = await gymStore.getStoreNumber()`

2. `const storeRes = await gymStore.getStore(2)`

2. `const storeOwnerRes = await gymStore.getStoreOwner(2)`

2. `const storeIdRes = await gymStore.getStoreId('0xf4267F20B463421D2cF3db534491b7920F79Ac4F')`

2. `const allStoresRes = await gymStore.getAllStores()`



