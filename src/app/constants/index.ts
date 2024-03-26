export const ETH_ADDRESS = '0x4557B18E779944BFE9d78A672452331C186a9f48';
export const TOKEN_ADDRESS = '0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5';
export const ETH_NAME = 'ETH';
export const TOKEN_NAME = 'FAKE_WETH';
export const RECIPIENT_ADDRESS = '0xf9E7ADff0f0F7052162F1e87C0575A13664bA1EB';
export const abi = [
  {
    type: 'function',
    name: 'approve',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  },
  {
    type: 'function',
    name: 'transferFrom',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  },
] as const
