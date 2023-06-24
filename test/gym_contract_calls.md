### Gym Contract calls

GymStore SC deployed to `0xe1751468a2eE67B29A6fFfe007C1D544b4055481`

#### Get GymStore Contract
const g = await ethers.getContractFactory("GymStore");
const gymStore = await g.attach("0xe1751468a2eE67B29A6fFfe007C1D544b4055481");


#### GymStore Contract function calls
```
const storeCreatedRes = await gymStore.createStore('Anytime Fitness Gym', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq', 'Bangalore, India', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq')

storeCreatedRes = await gymStore.createStore('Zero Gracity Health Club', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq', 'New Delhi, India', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq')
```

2. `const ownerStoreRes = await gymStore.getOwnerStore('0xf4267F20B463421D2cF3db534491b7920F79Ac4F')`

2. `const storeNumRes = await gymStore.getStoreNumber()`

2. `const storeRes = await gymStore.getStore(2)`

2. `const storeOwnerRes = await gymStore.getStoreOwner(2)`

2. `const storeIdRes = await gymStore.getStoreId('0xf4267F20B463421D2cF3db534491b7920F79Ac4F')`



