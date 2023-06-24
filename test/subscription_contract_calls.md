### GymSubscription Contract calls

GymSubscription SC deployed to `0x53b21646a2b013eb17898915466e400AeD9f18D5`

#### Get GymSubscription Contract
const gs = await ethers.getContractFactory("GymSubscription");
const gymSub = await gs.attach("0x53b21646a2b013eb17898915466e400AeD9f18D5");


#### GymSubscription Contract function calls
```
const subCreatedRes = await gymSub.createSubscription(1, 'Anytime Fitness - Sagar Anand 1 Year NFT Subscription', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq', '0xDeC6Df558e198A7745AcBe881f61B3506D59CFC4', 1719082288);

subCreatedRes = await gymStore.createSubscription(2, 'Zeo Gravity - Sagar Anand 1 Month NFT Subscription', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq', 'ipfs://bafybeihbmt4n5gr6qifjhu6haxrx433rzmvpw4smvywt2xf4nn3gqhvckq', '0xDeC6Df558e198A7745AcBe881f61B3506D59CFC4', 1690095132);
```

2. ```
0xDeC6Df558e198A7745AcBe881f61B3506D59CFC4
const hasGymSub = await gymSub.hasStoreSubscription('0xf4267F20B463421D2cF3db534491b7920F79Ac4F')
`````

2. ```
const subData = await gymSub.GetSubscriptionData(0)
```

2. `const storeRes = await gymStore.getStore(2)`

2. `const storeOwnerRes = await gymStore.getStoreOwner(2)`

2. `const storeIdRes = await gymStore.getStoreId('0xf4267F20B463421D2cF3db534491b7920F79Ac4F')`







