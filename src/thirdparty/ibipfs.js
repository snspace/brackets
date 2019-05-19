/* Be All I(PFS) Can Be In Web Browser */
/*
 * - _Making_ the power of `IPFS` more _accessible_
 * - _Bridging_ the gap between `IPFS` and `Browser`
 * - _Empowering_ the person with `facility`
*/
/**
 * --------------------------------------------------------------------------
 * IBIPFS (v0.2.0): ibipfs.js
 * MIT
 * --------------------------------------------------------------------------
 */
define(function (require, exports, module) {
	void{} // Start with Unknown

	const ESSENCE = 'Be All I(PFS) Can Be In Web Browser'

	const VERSION = 'v0.2.0'

	const STORY = 'ibipfs'

	// setting
	const i = 'QmRftzEbreVTdWSwbwSogVoNSbs4XEtX2TJewFJkh2dTvB'

	const _i = { 
		jsipfs: {
			ipfs: {
				cid: ['Qma4RDy3KMvVQ2dTMMv49bQiUD3CufvNNuHCALkRR8BfYk'],
				dnsLink: ['jsipfs.ipfs.io', 'jsipfs.gateway.ipfs.io', 'jsipfs.edening.net'],
				ipns: ['QmPfTZQK7EUABn2RhhxLnEBzQyJCvwvmcF2GPmZ2CbSs4X']
			},
			cdn: ['https://unpkg.com/ipfs/dist/index.min.js', 'https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js'],
			git: ['https://github.com/ipfs/js-ipfs.git'],
			local: 'inline'
		},
		options: {
		  init: true,
	    start: false,
	    EXPERIMENTAL: {},
			preload: {
				enabled: false,
				addresses: [
				  '/dnsaddr/service.edening.net/https',
			    '/dnsaddr/node0.preload.ipfs.io/https',
			    '/dnsaddr/node1.preload.ipfs.io/https'
			  ]
			},
		  config: {
		    Addresses: {
				  Swarm: [],
				  API: '',
				  Gateway: ''
				},
				Discovery: {
				  MDNS: {
				    Enabled: false,
				    Interval: 10
				  },
				  webRTCStar: {
				    Enabled: true
				  }
				},
				Bootstrap: [
				  '/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd',
				  '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3',
				  '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM',
				  '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu',
				  '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm',
				  '/dns4/service.edening.net/tcp/443/wss/ipfs/QmdC5xvY5SKnCzz4b4wLhwDLzRW3tbpyMjxqM3gay9WTVF',
			    '/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic',
			    '/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6'
				]
		  }
		}
	}

  var ibipfs = {}

	// being
  var init = function (callback) {
  	require(["thirdparty/ipfs.min.js"], function (Ipfs) {
			const ipfsNode = new Ipfs(_i.options)

			ipfsNode.on('error', (err) => {
				console.log('Error making ipfs instance: ' + err)

				callback(err)
			})

			ipfsNode.on('init', () => {
		    ibipfs.ipfsNode = ipfsNode
		    ibipfs.Ipfs = Ipfs

		    callback()
		  })
		});
  }

  var isReady = function () {
  	return ibipfs.ipfsNode && ibipfs.Ipfs
  }

  var handle = function () {
  	return ibipfs.ipfsNode
  }
  
  module.exports = {
  	init: init,
  	isReady: isReady,
  	handle: handle
  };
});