import type { ComparisonSection, ComponentComparison } from '../component-comparison-data'

// Static editorial specimen data. JSON payloads keep visible specimen labels identical for UI and MCP.
const sources: Record<string, NonNullable<ComponentComparison['sourceReferences']>> = {
  "data-table": [
    {
      "path": "library/components/data-table/component.json",
      "sha256": "b4e245e84206bd39fa7f91c0958285c570ec3b010819763aab7fbf132db69be8"
    },
    {
      "path": "library/components/data-table/interface.json",
      "sha256": "8b051f129a2c98a1c9ac71fe5940f10af9d1ebddc9f607bb46e5f468e8f0c113"
    },
    {
      "path": "library/components/data-table/layout.css",
      "sha256": "d91052ba21e3a82d01ebecffa4759ed186f71a59bb07e37617be3c69ff726ed4"
    },
    {
      "path": "library/components/data-table/behavior.scxml",
      "sha256": "53abe96288469985a93c0f124cf70930152d1c27782c97069c2d419cd0481a22"
    },
    {
      "path": "library/components/data-table/accessibility.html",
      "sha256": "e9d4b64cb18b66251906140e38f53e9c882d12d659b455acf18b9064fd65c34c"
    },
    {
      "path": "library/components/data-table/stories.json",
      "sha256": "4cad309a3fc16b056e94dfad69c6640f90ff6c1c2598fcf383ee37dcc8ada1af"
    },
    {
      "path": "library/components/data-table/ux.json",
      "sha256": "194cc20d93d0e65eb108324ac73a4e34840ecb2be9d85b7d10d0250532f51cd7"
    }
  ],
  "table": [
    {
      "path": "library/components/table/component.json",
      "sha256": "f262e7430239a2c6c30287d1b1c8771efc23f207fa7717e515922fe9f7ffec36"
    },
    {
      "path": "library/components/table/interface.json",
      "sha256": "82c323879365cdfd07fd740bf9aaa61f6d068fafb303e92f05430735c46df4fb"
    },
    {
      "path": "library/components/table/layout.css",
      "sha256": "831aae25c99d616214c0b8db0e45f6fe9fdde17a13fdcbe0d361eb45e039864e"
    },
    {
      "path": "library/components/table/behavior.scxml",
      "sha256": "cdcda25f5fbb2fd54d0eef074f192141236aa52d3ea38cca9253875609225718"
    },
    {
      "path": "library/components/table/accessibility.html",
      "sha256": "0741e830bebbca3fb7959cfb8527195d212a7b3fe6d8cd3e52a9bf1e10b5e0e8"
    },
    {
      "path": "library/components/table/stories.json",
      "sha256": "5ddbb7875e1075e7a5bd0bd8e57a58d2d159bbfe3adae70c33df76291f28d164"
    },
    {
      "path": "library/components/table/ux.json",
      "sha256": "3e50b5d74d9ca9c50946ae07aa511f4d935374e1896eb10b64209456ab12dab0"
    }
  ],
  "chart": [
    {
      "path": "library/components/chart/component.json",
      "sha256": "f6dafb3b4a541e6f297344a39cdf2724c986df17561f084b5546ad71dfab72ec"
    },
    {
      "path": "library/components/chart/interface.json",
      "sha256": "ff0aac1cdaa45f887f26d6590a2f5facb7878a3932e4d1d2bdf686b5a1a9b0b1"
    },
    {
      "path": "library/components/chart/layout.css",
      "sha256": "6e0d8cfc53f13a0c24e2d54789408052cb8d7c306f5b68fadd23b431d98e2e50"
    },
    {
      "path": "library/components/chart/behavior.scxml",
      "sha256": "8c9e65113d9c9066e5d0e5600d023958d5c4643ef1180f3d627a5e1a9c39772a"
    },
    {
      "path": "library/components/chart/accessibility.html",
      "sha256": "37afae55222c7e13ce79fcb45121e068c7ad9892e793a108f48157f42a7b47f2"
    },
    {
      "path": "library/components/chart/stories.json",
      "sha256": "727964a4304cf2b28b0faf4dd91adfd351d5c7d77ff45a3b7865ac09394a5e12"
    },
    {
      "path": "library/components/chart/ux.json",
      "sha256": "b77b1be2a72420f9ea5c379c9bec8dc7996d27a5bb4c98ecdae05ce53dd69335"
    }
  ],
  "chart-area": [
    {
      "path": "library/components/chart-area/component.json",
      "sha256": "8eabbe7b58fac16048b1e4cba0192f16c2e573203be2e34ee89508072c63dda2"
    },
    {
      "path": "library/components/chart-area/interface.json",
      "sha256": "36e5275934ce6ed612606319095941550fa81b14c5274f287f57283d15e59679"
    },
    {
      "path": "library/components/chart-area/layout.css",
      "sha256": "d02aeb95477eac97b35bff0424d31a60b6c6e297384ff6a721fa7ba782319ad4"
    },
    {
      "path": "library/components/chart-area/behavior.scxml",
      "sha256": "ad62ade0cec559f2d4c1b0ce8be5f162fabb68958c4b5549af934415abaafea6"
    },
    {
      "path": "library/components/chart-area/accessibility.html",
      "sha256": "7ba37c25f06c7cd728cf97a6bfb0e291ae0b18413132e1e6847689e4d9538124"
    },
    {
      "path": "library/components/chart-area/stories.json",
      "sha256": "7da33d935cf28f8de08f23687c2ca59f6d72082af27c88e9f0599da8c9e21cf2"
    },
    {
      "path": "library/components/chart-area/ux.json",
      "sha256": "3ad4a362b827fbf108490a76871b1f9c4643386d8036b2d356ecd61a7a28c283"
    }
  ],
  "chart-bar": [
    {
      "path": "library/components/chart-bar/component.json",
      "sha256": "28b15e268839d9ab2a0419c733a2d5a2bb61ef722d22c37d16b8e18de327454d"
    },
    {
      "path": "library/components/chart-bar/interface.json",
      "sha256": "376e07d14d72527dcae7461f8cabe42e7b4fb8da7c070445a8c1cb7e8fa15fec"
    },
    {
      "path": "library/components/chart-bar/layout.css",
      "sha256": "539fc6fbb14a2771025553dc77282d643756da7c645edbcc162f6a6608555cbb"
    },
    {
      "path": "library/components/chart-bar/behavior.scxml",
      "sha256": "4ce2dd0995edc6753c2973f7cc7566b8922d072acf461a9764d984bc996114d8"
    },
    {
      "path": "library/components/chart-bar/accessibility.html",
      "sha256": "1e2de74fa186b2d240b82c1f2131ed1df37cf741feac75294abe66e396e1d185"
    },
    {
      "path": "library/components/chart-bar/stories.json",
      "sha256": "d2b1cb3de4976907415fd07b62f22cbf01a89aea28b2f81b82c4a0d5f8e688d2"
    },
    {
      "path": "library/components/chart-bar/ux.json",
      "sha256": "ea850bb28da24c0b9975607adfdc5fd8c6903f5f5ba26bb4dcb25c4f61000d24"
    }
  ],
  "chart-line": [
    {
      "path": "library/components/chart-line/component.json",
      "sha256": "012d5e4966d95798589fcaec7504c816d34b9610612d59cf48f67af4f1986201"
    },
    {
      "path": "library/components/chart-line/interface.json",
      "sha256": "60831759cf1df2521ef570fa64cdfa5bf963615935940a1dfa4131601ab846e2"
    },
    {
      "path": "library/components/chart-line/layout.css",
      "sha256": "754c18d714a366ad8e6eb6ec57df5b877fd88cdb8cc2f16fa5c3653bb4e16d18"
    },
    {
      "path": "library/components/chart-line/behavior.scxml",
      "sha256": "e9674a96746beee1e4b8ebea8364700c3e4acf917d4a9ceaa1fc807a4b5c953d"
    },
    {
      "path": "library/components/chart-line/accessibility.html",
      "sha256": "0a7e398dac65f3d9631d35e04f8c9a478700d30fb534a10b2206fd5d7e6b969c"
    },
    {
      "path": "library/components/chart-line/stories.json",
      "sha256": "d146b16b0523642dfc1103c4db5d51e0f78e3377b2075856cd9e573104d3ab3e"
    },
    {
      "path": "library/components/chart-line/ux.json",
      "sha256": "3056d498d2fd7076b585a07831f8a0814acae656522d9c075fdd91ac2ec63f32"
    }
  ],
  "chart-pie": [
    {
      "path": "library/components/chart-pie/component.json",
      "sha256": "9baddd5afb0c4f0edf4f5374cc986d5649c4fbcaff0923292045355e30e50f34"
    },
    {
      "path": "library/components/chart-pie/interface.json",
      "sha256": "5445e95fc08771eb146df6785c5ed6d811439dda8d8b86fac75db4f23efdc046"
    },
    {
      "path": "library/components/chart-pie/layout.css",
      "sha256": "0114efce1fc330990cdb6a174c26b620cee3555e6a9ba9fc59eb1b1de55366a3"
    },
    {
      "path": "library/components/chart-pie/behavior.scxml",
      "sha256": "8d9aebc628bf59fb61a550d65e8e51e76936c205e0a33b73cde99a01c3de3410"
    },
    {
      "path": "library/components/chart-pie/accessibility.html",
      "sha256": "6e4ca4c8e44c13f33c4621d06df840f2865a70fbdeaf6c5f14f7c82d5e116670"
    },
    {
      "path": "library/components/chart-pie/stories.json",
      "sha256": "1a600da2d299278be9082d8f5c096423a672fdf6927dd824aed49eb3771b5015"
    },
    {
      "path": "library/components/chart-pie/ux.json",
      "sha256": "9be2f1ddc0a4550cba14e4ff0327a336d114f5624a52f381df6fe3c45ee95f49"
    }
  ],
  "chart-radar": [
    {
      "path": "library/components/chart-radar/component.json",
      "sha256": "1eb532ce0af4704ab303171c10e452a2b9ae5ca3740dbc8427688a153ad4d4bd"
    },
    {
      "path": "library/components/chart-radar/interface.json",
      "sha256": "651db234f145feb081686fbdded3dfe05efd272a5bc5ce59b0b04c11a141d32e"
    },
    {
      "path": "library/components/chart-radar/layout.css",
      "sha256": "3f3fabf17a5a80acb6ee5309957e16ea441d93d01ba9b9cf3895c53fbf4bb519"
    },
    {
      "path": "library/components/chart-radar/behavior.scxml",
      "sha256": "2da775041a708b064e8b3d7d576e7e98540a1f3476c1d72d2ebdfd510d46dd86"
    },
    {
      "path": "library/components/chart-radar/accessibility.html",
      "sha256": "959396398a2eb765a847b77cb30c7e378d73cb15478de1cf9df4e34eb87e0b7a"
    },
    {
      "path": "library/components/chart-radar/stories.json",
      "sha256": "ad1333ac9189b27768e7a29bc676d94facfea736c3fe25dbc8263dd4380be384"
    },
    {
      "path": "library/components/chart-radar/ux.json",
      "sha256": "75cc61775db3d84d762fd0bf52e2799336351af5775d56c4c018ff18eaf896c0"
    }
  ],
  "chart-radial": [
    {
      "path": "library/components/chart-radial/component.json",
      "sha256": "3c761e9a3b84b1a821acdf2cd9e8a4015f863c2cd5a9b3d16c49c2f52107c9b9"
    },
    {
      "path": "library/components/chart-radial/interface.json",
      "sha256": "ec4bb5f28c064c1e5242f06ab573a4c6dbbccb02b3f1b30de050439d580f1e88"
    },
    {
      "path": "library/components/chart-radial/layout.css",
      "sha256": "6795b1774bac92ca2fd4ddbe9d4963f15260bf3dcad6e7551d2c6d3d4928607f"
    },
    {
      "path": "library/components/chart-radial/behavior.scxml",
      "sha256": "a764404d2d9b065ae8fb6b9b982ea9f004f5841931ba4246bbae120924b68d43"
    },
    {
      "path": "library/components/chart-radial/accessibility.html",
      "sha256": "9166a470eaff51ce2845c62f6d82f6e773852a5d2b63eff246924dc24448d622"
    },
    {
      "path": "library/components/chart-radial/stories.json",
      "sha256": "ae74947bec6a6584b16c489d98a932f82e6ad1544fa7adb6b141ed8c58230c20"
    },
    {
      "path": "library/components/chart-radial/ux.json",
      "sha256": "97a0ab216ab0a474193d2a6056a1250d4ae6b593962d4fd5b2974a0e25325d84"
    }
  ],
  "chart-tooltip": [
    {
      "path": "library/components/chart-tooltip/component.json",
      "sha256": "1e3255cdd9f21c188aecfbd02519b24688b8c69c48e1c4d83bfeb78404972506"
    },
    {
      "path": "library/components/chart-tooltip/interface.json",
      "sha256": "f06f552caedf0778e33cf1bb38f826024b822853f760e5bf81828f28f3f97954"
    },
    {
      "path": "library/components/chart-tooltip/layout.css",
      "sha256": "8cea02d75f587a8ee35a1c28741ee201af82164e107d77e7fbec64ae52b38d05"
    },
    {
      "path": "library/components/chart-tooltip/behavior.scxml",
      "sha256": "4734956710b179a8f4962a26f4d441c86bde5e8e0434998e12ef8d58c22faa25"
    },
    {
      "path": "library/components/chart-tooltip/accessibility.html",
      "sha256": "d7810da8c6fd9cfbd9a666fd511f2d74bd503fd48105f97ae8675c11c1dcee2c"
    },
    {
      "path": "library/components/chart-tooltip/stories.json",
      "sha256": "c06be83373ebc6cd64f25508b4a2a84eb2232977ee611197add17681f5c01705"
    },
    {
      "path": "library/components/chart-tooltip/ux.json",
      "sha256": "d51d88d82531964daf513f66c6bf2136f01cc87585c70e6c4a358b0b686b5aae"
    }
  ],
  "card": [
    {
      "path": "library/components/card/component.json",
      "sha256": "a272b45b48b79731606838dba1e9f81e420fc948c09c02312b77068b367f7657"
    },
    {
      "path": "library/components/card/interface.json",
      "sha256": "02a9bd3e022a08740db7478fcc055e8c1b9e4e6067b899da5a6f7f17b26141ac"
    },
    {
      "path": "library/components/card/layout.css",
      "sha256": "33fec60db44fffba95f9020d6eda83d1d009f463e995b7dd184b98975aa5adc6"
    },
    {
      "path": "library/components/card/behavior.scxml",
      "sha256": "fd37a5cd995cde3130ed30bd99b4cdc7f5721ba35c1ed1105069dd56e45f4e6c"
    },
    {
      "path": "library/components/card/accessibility.html",
      "sha256": "08490f59e8a334b4ebcc0535ac9a1c8817c0388574019dd7875c7aa5eae75c1f"
    },
    {
      "path": "library/components/card/stories.json",
      "sha256": "d90da6e50d4958052f53b71df77bb7f8a9ff6b4092ceb309db828a45ff2eca8c"
    },
    {
      "path": "library/components/card/ux.json",
      "sha256": "9a2e0f0a9c888c7b63947142a95b8e72f6e9849942e074035708831193aec7a4"
    }
  ],
  "item": [
    {
      "path": "library/components/item/component.json",
      "sha256": "77b31ad82e26843b488e595fcc13331f241e858e91419f34473282e3e3db1dd9"
    },
    {
      "path": "library/components/item/interface.json",
      "sha256": "90a94e2a2f304b655052aa50e42948c7a9780cc5a81527ac53744110b18d6970"
    },
    {
      "path": "library/components/item/layout.css",
      "sha256": "c58fa725791327936af632d7f08677b5b92ce6da591aefaa6a8a6fcf8f5b9097"
    },
    {
      "path": "library/components/item/behavior.scxml",
      "sha256": "5be735a9a5f439124c1b4afeee6fe3bd6d672001674ff7f7c2bf94a5e3b56e64"
    },
    {
      "path": "library/components/item/accessibility.html",
      "sha256": "86c309b790050543e93a0fbe7b9ed7eec6d71f2316c28a618f7710714990c6af"
    },
    {
      "path": "library/components/item/stories.json",
      "sha256": "4262f4f57e0e50d62026ea5831477e9837de5f2e696cae25db6eb70769a6f49d"
    },
    {
      "path": "library/components/item/ux.json",
      "sha256": "b00c42d32f974168556c6cd3617c63cdcb284d3baf9bbdb961669498668b488c"
    }
  ],
  "avatar": [
    {
      "path": "library/components/avatar/component.json",
      "sha256": "c1cbfb4dea8ed8eef9a095734ad9c792aee6db57a68a98d64c803040fd2c62fe"
    },
    {
      "path": "library/components/avatar/interface.json",
      "sha256": "c7bea734cbfc3cfb50bf9eb2995e952f35636461625f6849d4d70f5bc6f7ffc6"
    },
    {
      "path": "library/components/avatar/layout.css",
      "sha256": "9ff12b2df8bacf34e7af0f5b75f035eee4b44f20906dd12ab8966189e4d0ba77"
    },
    {
      "path": "library/components/avatar/behavior.scxml",
      "sha256": "9650c3c8511e2ff537a052091a553c94337a4443d2bec3c938f902188c83c065"
    },
    {
      "path": "library/components/avatar/accessibility.html",
      "sha256": "3e4d397b9bcf4119dba9b29d109a23ef97ffb7584081ac91210e275cba576ff2"
    },
    {
      "path": "library/components/avatar/stories.json",
      "sha256": "a4aff6a7e29752fe9767f1903e669eb4e9c0496debf2019695ca09ab6a81dced"
    },
    {
      "path": "library/components/avatar/ux.json",
      "sha256": "f8b3ea77121e1e2f62edba8fbb2d2e52abc98c408976719d83ca52e5accf1feb"
    }
  ],
  "badge": [
    {
      "path": "library/components/badge/component.json",
      "sha256": "249cc2d6b8a89ee526c7f989a35badcfe4babd1e969287da3befcf42fb30fe5a"
    },
    {
      "path": "library/components/badge/interface.json",
      "sha256": "b0df0754ea99cd16436eac56098169c58551d17a5c32f60db6b0161936a76d38"
    },
    {
      "path": "library/components/badge/layout.css",
      "sha256": "81f6af2dc8b2c5652a4edfcb1cc981bea3f6f7a02e7abf13d923f2610b000fb7"
    },
    {
      "path": "library/components/badge/behavior.scxml",
      "sha256": "1c009beda3dba76124c65b7cc531dd88f9ae3716b22109b083f2650707ab3a63"
    },
    {
      "path": "library/components/badge/accessibility.html",
      "sha256": "cb919d571e4fa6b03a33d232e820e36301dcd20139e8fc2890f58fe929e6ce64"
    },
    {
      "path": "library/components/badge/stories.json",
      "sha256": "f688fe17c4cd7464f0ab951a7875019854ebec02b4bbe09e5bf020b0832d879f"
    },
    {
      "path": "library/components/badge/ux.json",
      "sha256": "52b2e94fa2defa8e182e677b262acf56470427b28f34a2dc55b4753b0c2f8af4"
    }
  ],
  "aspect-ratio": [
    {
      "path": "library/components/aspect-ratio/component.json",
      "sha256": "76cf8b0ffa1283f6df639406385d8d3788488bcc3a18cf9a35299c438a2c9193"
    },
    {
      "path": "library/components/aspect-ratio/interface.json",
      "sha256": "f1bf6608e6c0bd8de27a75342fdfa94fac18784cba73aee7eb828c364d01824c"
    },
    {
      "path": "library/components/aspect-ratio/layout.css",
      "sha256": "b3c2232eaaa7f82f637ae6e8df89cf48c7574fe4325cbf10cc739b44a85cea54"
    },
    {
      "path": "library/components/aspect-ratio/behavior.scxml",
      "sha256": "1a0b6857b4be0111bad3f172cb731e78097706b966bedc8e0507dd5ec15e7ca8"
    },
    {
      "path": "library/components/aspect-ratio/accessibility.html",
      "sha256": "1ed0a89d2d6a624d6fa13a2bc0ba28f77ee09815157ca9e9168bc1ecc1ff1ccc"
    },
    {
      "path": "library/components/aspect-ratio/stories.json",
      "sha256": "4f20e05f7a95fc6207c7128f22343e2ddc884fc9daabab203ec82a5193d84568"
    },
    {
      "path": "library/components/aspect-ratio/ux.json",
      "sha256": "a41b672317b6819512be3cae40b59ae1ffadad7c153e0437b09c163840c87437"
    }
  ],
  "carousel": [
    {
      "path": "library/components/carousel/component.json",
      "sha256": "4fdef2936ca0faed81bdc2413a4d94bf2fe2fdfb0ad8f70c2f09db28906b17c2"
    },
    {
      "path": "library/components/carousel/interface.json",
      "sha256": "75076da26d68362827a1dfd300a44aa9220de801a24b5aecc68c78affd455137"
    },
    {
      "path": "library/components/carousel/layout.css",
      "sha256": "abdcc73f8cbaa54adb3e5d25fa4388b162ae4b7ddda9e27493bf1eec4c247e2c"
    },
    {
      "path": "library/components/carousel/behavior.scxml",
      "sha256": "99483065c45fef4d84d90aebcb234bd6dfe19e5d38be6a56e84e1accc7e739d0"
    },
    {
      "path": "library/components/carousel/accessibility.html",
      "sha256": "4fe255bfbac7ec7e21626a4a915a6862169eda8bdb075f4abf394f3dc4335c91"
    },
    {
      "path": "library/components/carousel/stories.json",
      "sha256": "7b20ccc596989cb9f0b94a3a9cd91872f6a2f211912942a2c5ce1454408c0651"
    },
    {
      "path": "library/components/carousel/ux.json",
      "sha256": "d27d607a1d2157d83b18706fb6f15d7d04bb4c6e70ce1e5b4a217d08c396612c"
    }
  ],
  "separator": [
    {
      "path": "library/components/separator/component.json",
      "sha256": "2d392fc029bff93942566f5e847583c4637f7ab8be9838ee5f2738e8353d9e7a"
    },
    {
      "path": "library/components/separator/interface.json",
      "sha256": "732e0840b6a9543fd539f3c2032967dcfbc68c03bb6c732d063c053c56fbce2b"
    },
    {
      "path": "library/components/separator/layout.css",
      "sha256": "e00e2c5ee064cb310a48265d31d09e4eb36cac77b71097409a86ce9a88d1268c"
    },
    {
      "path": "library/components/separator/behavior.scxml",
      "sha256": "1693c60315f7e393fc9ed92187ea0ab26aecf4720c1d29eb2841964c3cf7ab4a"
    },
    {
      "path": "library/components/separator/accessibility.html",
      "sha256": "7ccdf2787b3898460b8b82185df3468c2a79104f432943a77d4ca8485067f0cd"
    },
    {
      "path": "library/components/separator/stories.json",
      "sha256": "ba1651009949c08b1691b4a57b52ed61b174b81ecb25547a1062f8807f1f3784"
    },
    {
      "path": "library/components/separator/ux.json",
      "sha256": "5ec2d7db36cd05a51169f7ce7dceeb6a10bddb79d8166c51dcaae1883ca34eeb"
    }
  ],
  "code-block": [
    {
      "path": "library/components/code-block/component.json",
      "sha256": "9b0638dfe4de5a066a750588dee542d4fba04cc598d866a02401d3f70b0af05d"
    },
    {
      "path": "library/components/code-block/interface.json",
      "sha256": "e47331cc93a45c4326ea469e0b15cb05c10b79dc9fce8f3b4d5fa86e421b34d8"
    },
    {
      "path": "library/components/code-block/layout.css",
      "sha256": "f16122890e0b265aedfb8c7500f96ddabdc296e5a1c54cf4cfd9e87ba2e16e32"
    },
    {
      "path": "library/components/code-block/behavior.scxml",
      "sha256": "afb88265bcc382d20fff55f7c3a9823e241c2e0b07ef5ca9595d8c3b9e59d506"
    },
    {
      "path": "library/components/code-block/accessibility.html",
      "sha256": "7cbc4078dcc07d5e44a673ccbf737964d91bb322245d727b89de70a8862c93dc"
    },
    {
      "path": "library/components/code-block/stories.json",
      "sha256": "8fcf4bf97aba764c916afb0f7629961dbd6de17a79cc03da41ee6c6204694326"
    },
    {
      "path": "library/components/code-block/ux.json",
      "sha256": "c2951a9df6f068bd709e875f7991b53d7c8f58b99313bb9788524b95872ee174"
    }
  ],
  "bubble": [
    {
      "path": "library/components/bubble/component.json",
      "sha256": "bf05b7601ae419e679c94f79f20e72945d1ca0f8e576bf08dbf953e73ba0c639"
    },
    {
      "path": "library/components/bubble/interface.json",
      "sha256": "732a5220bb8a738d4e1e4e8143dc313551e69c668e95e02a761595ed9bd191ba"
    },
    {
      "path": "library/components/bubble/layout.css",
      "sha256": "0a99e5d0b970c1525117ee182d8e53c243c7a5ba209fdc8736e7c199104fe0b1"
    },
    {
      "path": "library/components/bubble/behavior.scxml",
      "sha256": "b0f5f5a241c2b7fa3a4ce51de436da2ce8eb40a472ae3717092fc33eccdf9a94"
    },
    {
      "path": "library/components/bubble/accessibility.html",
      "sha256": "913237d71c138f1dcb7c0c232b14e26ecf3c375fc9cbd9da4738139f750b247f"
    },
    {
      "path": "library/components/bubble/stories.json",
      "sha256": "482ab5cd3ebc08a21ee23251ef6c6e58455fb3b638518e1bde13df0912a5ae12"
    },
    {
      "path": "library/components/bubble/ux.json",
      "sha256": "b171b706c2b687416dd0801d2da8cbf55a2c9b00a1f3831d72253685c77801f3"
    }
  ],
  "message-scroller": [
    {
      "path": "library/components/message-scroller/component.json",
      "sha256": "a5d76006cac4ba8e6bf3fd9a8fb0cf0d2f6bdedae764625fb97cc386e550b5c6"
    },
    {
      "path": "library/components/message-scroller/interface.json",
      "sha256": "0c1e576ff289af6f326b3788e2aefb1d6cbc5e3d819a6cf5fbad60e6a5939528"
    },
    {
      "path": "library/components/message-scroller/layout.css",
      "sha256": "e42c781cbcce0c51e01049396ed59be15d92c2e51c015f5298ce7214c966e800"
    },
    {
      "path": "library/components/message-scroller/behavior.scxml",
      "sha256": "4e7e34e66d22ade398d8ea74be1cb3c8f00b10326caa66384040dca73c74d924"
    },
    {
      "path": "library/components/message-scroller/accessibility.html",
      "sha256": "ad899e552bccdd927af3beb623cab5b9809e19483694bc4e0d46527df5da22be"
    },
    {
      "path": "library/components/message-scroller/stories.json",
      "sha256": "41c5e3bf991ae5f41fca55e8bf8c53daa1ea24d04638bc5aa01ca146458cafc1"
    },
    {
      "path": "library/components/message-scroller/ux.json",
      "sha256": "e7ef2ed89ad3ca9a1d7e68d8a59da94393660b4d74141790aa65b03283f249e2"
    }
  ],
  "attachment": [
    {
      "path": "library/components/attachment/component.json",
      "sha256": "73e0a0cc62a6a823a4a2fbc433beefbad75022957667cfc788d08e03b84705cf"
    },
    {
      "path": "library/components/attachment/interface.json",
      "sha256": "b7eabcbc08520a9d25b20dd1f107e978d60b136f709e2acaaab9b43d5d202541"
    },
    {
      "path": "library/components/attachment/layout.css",
      "sha256": "a921a7f206c214c5a70a7c2d20f609c52cc96407d61991dd90698ea72ddae092"
    },
    {
      "path": "library/components/attachment/behavior.scxml",
      "sha256": "f7131c88badf9e31f80c6be20c7f8db2f683d76b20dc95515a7e689237c3d022"
    },
    {
      "path": "library/components/attachment/accessibility.html",
      "sha256": "3c38452d48f66a6f569c6794dd69189ada4fbc4ccd1006b46030a1acd8f00e8f"
    },
    {
      "path": "library/components/attachment/stories.json",
      "sha256": "c5fc846dde4d3f89ea20d4ab763b9bdbc6f62e5909f81df9e2c46ec532177d98"
    },
    {
      "path": "library/components/attachment/ux.json",
      "sha256": "e262c2a5f1518bbc482eadac0234640ae9efffcf69e6d6e526c60429a227ddd7"
    }
  ],
  "marker": [
    {
      "path": "library/components/marker/component.json",
      "sha256": "3b5038f0fd02e8c197dfc35ee052362930a1f02b62783f8c3130b1b57c9e0d0c"
    },
    {
      "path": "library/components/marker/interface.json",
      "sha256": "137467e6046e03685e80348c47b7fdf97177a81a7cf1f718032d44dca4ab8b23"
    },
    {
      "path": "library/components/marker/layout.css",
      "sha256": "e0c81288a38f0b78f13aa22546e53374f64d50143cd087ae34dba9c7f2930d5c"
    },
    {
      "path": "library/components/marker/behavior.scxml",
      "sha256": "bc6d53722b510cd271e58185d20364373bb9522706a80c5a61b7b6f1a11414ca"
    },
    {
      "path": "library/components/marker/accessibility.html",
      "sha256": "9cc39e7de991be34249152b9f620668139fd56d1131954ca924c9caad096b124"
    },
    {
      "path": "library/components/marker/stories.json",
      "sha256": "43758aa5205f195f9a369713033ed30be57a19b00223fea99900107a2b13b619"
    },
    {
      "path": "library/components/marker/ux.json",
      "sha256": "e8f63bd9d4b416ef26f2c84bf37c78ee2e88379b3504226c699ac41fd9a5cfc1"
    }
  ],
  "trace": [
    {
      "path": "library/components/trace/component.json",
      "sha256": "054f384a6f81e192edbfa5c20d76dc6a51ccfb9c6033d67c488fa511f38609d1"
    },
    {
      "path": "library/components/trace/interface.json",
      "sha256": "5e171ad53d203704a887f5e966c4833c525008adaedf8cd11f7cedb27a95db63"
    },
    {
      "path": "library/components/trace/layout.css",
      "sha256": "d670e834cc878473954d4c5e6afa6779b49030c0f4b574b4de02fda4f8a4f98c"
    },
    {
      "path": "library/components/trace/behavior.scxml",
      "sha256": "e69d3826714fac58339448590ddae1cc946e8949ee0cf90b476325887af58084"
    },
    {
      "path": "library/components/trace/accessibility.html",
      "sha256": "9387f2769b9524b959053f4033d125de4eeb24c8fc0efa4edb1eb915c62b55c3"
    },
    {
      "path": "library/components/trace/stories.json",
      "sha256": "1cb16eae70f8cfc609694e155544c9e24ad1e83afb71f060f9406268c7f2af9c"
    },
    {
      "path": "library/components/trace/ux.json",
      "sha256": "cc657c0be12cfd8c6ebf80fe121fab3bc70000e947de839c90692498a3575d32"
    }
  ]
}

const comparisons: Record<string, Record<ComparisonSection, ComponentComparison[]>> = {
  "data-table": {
    "variants": [
      {
        "id": "data-table-recipe",
        "title": "Zahlungen im Überblick",
        "description": "Eine Tabelle mit benannten Spalten und einer Ergebniszahl.",
        "layout": "full",
        "items": [
          {
            "id": "payments",
            "title": "Rezept mit Datensätzen",
            "description": "E-Mail, Status, Betrag und Währung sind redaktionelle Beispieldaten.",
            "value": "{\"heading\":\"Aktuelle Zahlungen in US-Dollar\",\"headers\":[\"E-Mail\",\"Status\",\"Betrag (USD)\"],\"rows\":[[\"anna@example.com\",\"Ausstehend\",\"100.00\"],[\"beat@example.com\",\"Bezahlt\",\"125.00\"]],\"footer\":\"3 passende Zahlungen · 2 auf dieser Seite\"}"
          }
        ],
        "technicalNotes": "DataTable ist das dokumentierte Table/TanStack-Rezept und kein universeller Widget-Export. Das statische Schema zeigt keine bedienbaren Filter oder Seitenaktionen."
      }
    ],
    "states": [
      {
        "id": "data-table-models",
        "title": "Sortierung und Auswahl",
        "description": "Dieselben Zahlungen: einmal sortiert, einmal mit hervorgehobener Zeile.",
        "layout": "wide",
        "items": [
          {
            "id": "sorted",
            "title": "Aufsteigend sortiert",
            "description": "aria-sort gehört zur echten Kopfzelle; der Pfeil ist nur eine Zusatzhilfe.",
            "value": "{\"sorted\":true,\"heading\":\"Aktuelle Zahlungen in US-Dollar\",\"headers\":[\"E-Mail\",\"Status\",\"Betrag (USD)\"],\"rows\":[[\"anna@example.com\",\"Ausstehend\",\"100.00\"],[\"beat@example.com\",\"Bezahlt\",\"125.00\"]],\"footer\":\"3 passende Zahlungen · 2 auf dieser Seite\"}"
          },
          {
            "id": "selected",
            "title": "Stabile Zeile gewählt",
            "description": "Markiert den Datensatz, unabhängig von Sortierung.",
            "value": "{\"selected\":true,\"heading\":\"Aktuelle Zahlungen in US-Dollar\",\"headers\":[\"E-Mail\",\"Status\",\"Betrag (USD)\"],\"rows\":[[\"anna@example.com\",\"Ausstehend\",\"100.00\"],[\"beat@example.com\",\"Bezahlt\",\"125.00\"]],\"footer\":\"3 passende Zahlungen · 2 auf dieser Seite\"}"
          },
          {
            "id": "empty",
            "title": "Gefiltertes Ergebnis leer",
            "description": "Die Leerzelle überspannt alle sichtbaren Spalten.",
            "value": "{\"empty\":true,\"text\":\"Keine passenden Zahlungen.\",\"heading\":\"Aktuelle Zahlungen in US-Dollar\",\"headers\":[\"E-Mail\",\"Status\",\"Betrag (USD)\"],\"rows\":[[\"anna@example.com\",\"Ausstehend\",\"100.00\"],[\"beat@example.com\",\"Bezahlt\",\"125.00\"]],\"footer\":\"0 passende Zahlungen\"}"
          },
          {
            "id": "hidden",
            "title": "Statusspalte ausgeblendet",
            "description": "Dieselben Zahlungen mit E-Mail und Betrag (USD).",
            "value": "{\"heading\":\"Aktuelle Zahlungen in US-Dollar\",\"headers\":[\"E-Mail\",\"Betrag (USD)\"],\"rows\":[[\"anna@example.com\",\"100.00\"],[\"beat@example.com\",\"125.00\"]],\"footer\":\"3 passende Zahlungen · 2 auf dieser Seite\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlerfeedback ersetzt keinen leeren Ergebnisdatensatz.",
            "value": "{\"error\":true,\"heading\":\"Aktuelle Zahlungen in US-Dollar\",\"text\":\"Zahlungen konnten nicht geladen werden.\"}"
          }
        ],
        "technicalNotes": "Sortierung, Zeilenauswahl, Spaltensichtbarkeit und Filter sind getrennte kontrollierte TanStack-Features; leer und fehlgeschlagen sind unterschiedliche Aufruferrückmeldungen.",
        "previewItems": [
          "sorted",
          "selected"
        ],
        "detailsLabel": "Leere, reduzierte und fehlerhafte Ergebnisse"
      }
    ]
  },
  "table": {
    "variants": [
      {
        "id": "table-anatomy",
        "title": "Zeilen, Spalten und Summe",
        "description": "Die Kopfzeile benennt die Werte; die Summe ergänzt die Tabelle.",
        "layout": "full",
        "items": [
          {
            "id": "native",
            "title": "Kanonische Zusammensetzung",
            "description": "40 px Kopf, mindestens 37 px Zelle, 8 px Innenabstand.",
            "value": "{\"heading\":\"Interne Buchungen · Oktober 2026\",\"headers\":[\"Raum\",\"Nutzung (Std.)\",\"Kosten (CHF)\"],\"rows\":[[\"Atelier\",\"10\",\"450\"],[\"Seminarraum\",\"8\",\"360\"],[\"Werkraum\",\"6\",\"270\"]],\"totals\":[\"Total\",\"24\",\"1’080\"]}"
          }
        ],
        "technicalNotes": "Der Table-Contract liefert Struktur und Geometrie. Datenschema, Caption, Kopfbeziehungen und Footerinhalt gehören zum Aufrufer."
      }
    ],
    "states": [
      {
        "id": "table-caller-state",
        "title": "Zeile hervorheben",
        "description": "Dieselben Räume mit und ohne Hervorhebung.",
        "layout": "wide",
        "items": [
          {
            "id": "base",
            "title": "Ohne Hervorhebung",
            "description": "Native Datenansicht.",
            "value": "{\"heading\":\"Interne Buchungen · Oktober 2026\",\"headers\":[\"Raum\",\"Nutzung (Std.)\",\"Kosten (CHF)\"],\"rows\":[[\"Atelier\",\"10\",\"450\"],[\"Seminarraum\",\"8\",\"360\"],[\"Werkraum\",\"6\",\"270\"]],\"totals\":[\"Total\",\"24\",\"1’080\"]}"
          },
          {
            "id": "selected",
            "title": "Erste Zeile hervorgehoben",
            "description": "Die erste Zeile ist visuell hervorgehoben; keine Auswahlsteuerung.",
            "value": "{\"selected\":true,\"heading\":\"Interne Buchungen · Oktober 2026\",\"headers\":[\"Raum\",\"Nutzung (Std.)\",\"Kosten (CHF)\"],\"rows\":[[\"Atelier\",\"10\",\"450\"],[\"Seminarraum\",\"8\",\"360\"],[\"Werkraum\",\"6\",\"270\"]],\"totals\":[\"Total\",\"24\",\"1’080\"]}"
          }
        ],
        "technicalNotes": "data-state=selected ist eine belegte Präsentationskonvention. Table besitzt weder gespeicherte Auswahl noch Sortierung oder Filter."
      }
    ]
  },
  "chart": {
    "variants": [
      {
        "id": "chart-composition",
        "title": "Diagramm mit Datenzugang",
        "description": "Monatliche Besuche als Balken; alle Werte stehen auch in der Datentabelle.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"bar\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit."
      },
      {
        "id": "chart-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"bar\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "chart-area": {
    "variants": [
      {
        "id": "chart-area-composition",
        "title": "Fläche unter dem Verlauf",
        "description": "Dieselben Monatswerte bilden den Verlauf und die gefüllte Fläche.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"area\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit."
      },
      {
        "id": "chart-area-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-area-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"area\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "chart-bar": {
    "variants": [
      {
        "id": "chart-bar-composition",
        "title": "Monate als Balken",
        "description": "Die Balken vergleichen Besuche auf einer gemeinsamen Skala ab null.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"bar\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit."
      },
      {
        "id": "chart-bar-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-bar-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"bar\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "chart-line": {
    "variants": [
      {
        "id": "chart-line-composition",
        "title": "Verbundene Monatswerte",
        "description": "Die Punkte zeigen Monatswerte; die Verbindung macht ihre Reihenfolge sichtbar.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"line\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit."
      },
      {
        "id": "chart-line-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-line-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"line\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "chart-pie": {
    "variants": [
      {
        "id": "chart-pie-composition",
        "title": "Anteile im Kreis",
        "description": "Die Kreissegmente zeigen Browseranteile; Namen und Werte stehen in der Datentabelle.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"pie\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Kanal\",\"Besuche\"],\"rows\":[[\"Direkt\",\"40\"],[\"Suche\",\"35\"],[\"Verweis\",\"25\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit."
      },
      {
        "id": "chart-pie-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-pie-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"pie\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Kanal\",\"Besuche\"],\"rows\":[[\"Direkt\",\"40\"],[\"Suche\",\"35\"],[\"Verweis\",\"25\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "chart-radar": {
    "variants": [
      {
        "id": "chart-radar-composition",
        "title": "Werte auf radialen Achsen",
        "description": "Monatswerte liegen auf gemeinsamen radialen Skalen; die Polygonfläche ist kein eigener Wert.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"radar\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit."
      },
      {
        "id": "chart-radar-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-radar-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"radar\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Monat\",\"Besuche\"],\"rows\":[[\"Jan\",\"18\"],[\"Feb\",\"30\"],[\"Mär\",\"24\"],[\"Apr\",\"12\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "chart-radial": {
    "variants": [
      {
        "id": "chart-radial-composition",
        "title": "Konzentrische Bögen",
        "description": "Bögen und Datentabelle zeigen dieselben Browserwerte.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"radial\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Kanal\",\"Besuche\"],\"rows\":[[\"Direkt\",\"40\"],[\"Suche\",\"35\"],[\"Verweis\",\"25\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit."
      },
      {
        "id": "chart-radial-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Besuche\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-radial-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"radial\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Kanal\",\"Besuche\"],\"rows\":[[\"Direkt\",\"40\"],[\"Suche\",\"35\"],[\"Verweis\",\"25\"]],\"footer\":\"Besuche (Anzahl)\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "chart-tooltip": {
    "variants": [
      {
        "id": "chart-tooltip-composition",
        "title": "Diagramm als Kontext",
        "description": "Der gestapelte Plot liefert den Kontext für die unten verglichenen Datenhinweise.",
        "layout": "full",
        "items": [
          {
            "id": "ready",
            "title": "Beispieldiagramm",
            "description": "Werte können unter dem Diagramm aufgeklappt werden.",
            "value": "{\"kind\":\"stacked\",\"heading\":\"Redaktionelle Beispieldaten\",\"headers\":[\"Datum\",\"Laufen\",\"Schwimmen\"],\"rows\":[[\"21. Nov\",\"18\",\"12\"],[\"22. Nov\",\"24\",\"16\"],[\"23. Nov\",\"20\",\"10\"]],\"footer\":\"Einheit im Quellbeispiel nicht festgelegt\",\"text\":\"Statisches SVG-Schema; keine Recharts-Laufzeit. Gerade Segmente vereinfachen die Kurven.\",\"tableLabel\":\"Datentabelle anzeigen\"}"
          }
        ],
        "technicalNotes": "ChartContainer entscheidet den Plottyp nicht selbst. Hier bleibt der für diese Seite belegte Typ erhalten; Daten und SVG-Geometrie sind redaktionell. Die vollständige Tabelle bleibt ohne Tooltip lesbar. Daten und vereinfachte SVG-Geometrie sind redaktionell; keine Recharts-Laufzeit.",
        "previewItems": [],
        "detailsLabel": "Diagrammkontext anzeigen"
      },
      {
        "id": "chart-tooltip-indicators",
        "title": "Markierung im Datenhinweis",
        "description": "Gleicher Name und Wert, drei Markierungen.",
        "layout": "compact",
        "items": [
          {
            "id": "dot",
            "title": "Punkt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dot\",\"heading\":\"21. November\",\"text\":\"Laufen\",\"footer\":\"18\"}"
          },
          {
            "id": "line",
            "title": "Linie",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"line\",\"heading\":\"21. November\",\"text\":\"Laufen\",\"footer\":\"18\"}"
          },
          {
            "id": "dashed",
            "title": "Gestrichelt",
            "description": "",
            "value": "{\"mode\":\"tooltip\",\"indicator\":\"dashed\",\"heading\":\"21. November\",\"text\":\"Laufen\",\"footer\":\"18\"}"
          }
        ],
        "technicalNotes": "indicator=dot/line/dashed ist eine echte ChartTooltipContent-Option. Diese festgehaltenen Ausschnitte sind ergänzender Inhalt und kein fokussierbares Tooltip-Widget."
      }
    ],
    "states": [
      {
        "id": "chart-tooltip-data-states",
        "title": "Datenrückmeldungen",
        "description": "Vorhandene Werte, leerer Zeitraum und Ladefehler bleiben unterscheidbar.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Daten vorhanden",
            "description": "Die vollständige Darstellung steht oben.",
            "value": "{\"kind\":\"stacked\",\"heading\":\"Daten vorhanden\",\"headers\":[\"Datum\",\"Laufen\",\"Schwimmen\"],\"rows\":[[\"21. Nov\",\"18\",\"12\"],[\"22. Nov\",\"24\",\"16\"],[\"23. Nov\",\"20\",\"10\"]],\"footer\":\"Einheit im Quellbeispiel nicht festgelegt\",\"text\":\"Die Werte sind im Beispieldiagramm dargestellt.\",\"mode\":\"ready-summary\"}"
          },
          {
            "id": "empty",
            "title": "Keine Daten",
            "description": "Ein benannter leerer Zeitraum ersetzt die Diagrammfläche.",
            "value": "{\"mode\":\"empty\",\"heading\":\"Keine Daten vorhanden.\",\"text\":\"Für diesen Zeitraum liegen keine Werte vor.\"}"
          },
          {
            "id": "error",
            "title": "Datenfehler",
            "description": "Fehlermeldung statt eines leeren oder auf null gesetzten Diagramms.",
            "value": "{\"mode\":\"error\",\"heading\":\"Daten konnten nicht geladen werden.\",\"text\":\"Die Datenquelle ist momentan nicht erreichbar.\"}"
          }
        ],
        "technicalNotes": "ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.",
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Rückmeldung bei vorhandenen Daten"
      }
    ]
  },
  "card": {
    "variants": [
      {
        "id": "card-size",
        "title": "Zwei Dichten",
        "description": "Gleicher Inhalt: kleinere Abstände und ein kleinerer Titel in der kompakten Karte.",
        "layout": "wide",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "16 px Innenabstand; 16 px Abschnitte, Titel 16/24 px.",
            "value": "{\"size\":\"default\",\"heading\":\"Projekt Atlas\",\"subheading\":\"Projektübersicht\",\"text\":\"Drei Aufgaben sind noch offen.\",\"footer\":\"Meilenstein · 28. November\"}"
          },
          {
            "id": "sm",
            "title": "Kompakt",
            "description": "16 px Innenabstand; 12 px Abschnitte, Titel 14/20 px.",
            "value": "{\"size\":\"sm\",\"heading\":\"Projekt Atlas\",\"subheading\":\"Projektübersicht\",\"text\":\"Drei Aufgaben sind noch offen.\",\"footer\":\"Meilenstein · 28. November\"}"
          }
        ],
        "technicalNotes": "size=default und sm. Die kompakte 12-px-Abstandsentscheidung stammt aus dem Referenzcontract; sie ist kein nachgewiesener eigener Figma-Master. Die Komponente besitzt keinen eigenen Interaktionszustand."
      }
    ],
    "states": []
  },
  "item": {
    "variants": [
      {
        "id": "item-variant",
        "title": "Drei Oberflächen",
        "description": "Dieselbe Dateizeile mit freier, umrandeter oder gedämpfter Fläche.",
        "layout": "wide",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "Text und Dateisymbol auf transparenter Fläche.",
            "value": "{\"variant\":\"default\",\"size\":\"default\",\"heading\":\"Quartalsbericht\",\"text\":\"PDF · 24 Seiten · Beispieldaten\"}"
          },
          {
            "id": "outline",
            "title": "Mit Umrandung",
            "description": "Eine feine Kontur umfasst die gesamte Zeile.",
            "value": "{\"variant\":\"outline\",\"size\":\"default\",\"heading\":\"Quartalsbericht\",\"text\":\"PDF · 24 Seiten · Beispieldaten\"}"
          },
          {
            "id": "muted",
            "title": "Gedämpft",
            "description": "Eine gedämpfte Fläche bündelt Symbol und Text.",
            "value": "{\"variant\":\"muted\",\"size\":\"default\",\"heading\":\"Quartalsbericht\",\"text\":\"PDF · 24 Seiten · Beispieldaten\"}"
          }
        ],
        "technicalNotes": "Gleicher Inhalt hält die Unterschiede sichtbar. Item ist keine eigene Auswahlsteuerung; sm ist eine ausdrückliche Referenzentscheidung. Die Komponente besitzt keinen eigenen Interaktionszustand.",
        "previewItems": [
          "default",
          "outline"
        ],
        "detailsLabel": "Weitere Oberfläche"
      },
      {
        "id": "item-size",
        "title": "Drei Abstände",
        "description": "Die Umrandung und der Dateiinhalt bleiben gleich.",
        "layout": "wide",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "10 px vertikaler und 12 px horizontaler Innenabstand.",
            "value": "{\"variant\":\"outline\",\"size\":\"default\",\"heading\":\"Quartalsbericht\",\"text\":\"PDF · 24 Seiten · Beispieldaten\"}"
          },
          {
            "id": "sm",
            "title": "Kompakt",
            "description": "8 px vertikaler, weiterhin 12 px horizontaler Innenabstand.",
            "value": "{\"variant\":\"outline\",\"size\":\"sm\",\"heading\":\"Quartalsbericht\",\"text\":\"PDF · 24 Seiten · Beispieldaten\"}"
          },
          {
            "id": "xs",
            "title": "Sehr kompakt",
            "description": "8 px vertikaler und 10 px horizontaler Innenabstand.",
            "value": "{\"variant\":\"outline\",\"size\":\"xs\",\"heading\":\"Quartalsbericht\",\"text\":\"PDF · 24 Seiten · Beispieldaten\"}"
          }
        ],
        "technicalNotes": "Gleicher Inhalt hält die Unterschiede sichtbar. Item ist keine eigene Auswahlsteuerung; sm ist eine ausdrückliche Referenzentscheidung.",
        "previewItems": [
          "default",
          "xs"
        ],
        "detailsLabel": "Weitere Grösse"
      }
    ],
    "states": []
  },
  "avatar": {
    "variants": [
      {
        "id": "avatar-sizes",
        "title": "Drei Bildgrössen",
        "description": "Dieselbe Person mit 24, 32 und 40 Pixeln Durchmesser.",
        "layout": "compact",
        "items": [
          {
            "id": "sm",
            "title": "24 Pixel",
            "description": "",
            "value": "{\"size\":\"sm\",\"text\":\"AM\",\"heading\":\"Alex Morgan\"}"
          },
          {
            "id": "default",
            "title": "32 Pixel",
            "description": "",
            "value": "{\"size\":\"default\",\"text\":\"AM\",\"heading\":\"Alex Morgan\"}"
          },
          {
            "id": "lg",
            "title": "40 Pixel",
            "description": "",
            "value": "{\"size\":\"lg\",\"text\":\"AM\",\"heading\":\"Alex Morgan\"}"
          }
        ],
        "technicalNotes": "Avatar.size=sm/default/lg; Initialen und Namen sind Beispieldaten, keine Auswahlwerte."
      },
      {
        "id": "avatar-group",
        "title": "Personengruppe",
        "description": "Überlappende Bilder mit einer ergänzenden Anzahl.",
        "layout": "full",
        "items": [
          {
            "id": "group",
            "title": "Gruppe mit Anzahl",
            "description": "8 px Überlappung, 2 px Ringe; +2 ist ein redaktioneller Zählwert.",
            "value": "{\"mode\":\"group\",\"text\":\"AM\",\"heading\":\"Alex Morgan, Sam Lee und zwei weitere Personen\",\"footer\":\"+2\"}"
          }
        ],
        "technicalNotes": "AvatarGroup übernimmt Positionierung; die Anzahl wird vom Aufrufer geliefert und nicht berechnet."
      }
    ],
    "states": [
      {
        "id": "avatar-loading",
        "title": "Bild und Ersatzdarstellung",
        "description": "Bei fehlendem Bild bleiben Name und Initialen sichtbar.",
        "layout": "compact",
        "items": [
          {
            "id": "loaded",
            "title": "Bild geladen",
            "description": "Illustration statt eines aus dem Contract extrahierten Porträts.",
            "value": "{\"mode\":\"loaded\",\"heading\":\"Alex Morgan\",\"text\":\"AM\"}"
          },
          {
            "id": "loading",
            "title": "Bild lädt",
            "description": "Der Fallback kann nach seinem konfigurierten Delay sichtbar sein.",
            "value": "{\"mode\":\"fallback\",\"heading\":\"Alex Morgan\",\"text\":\"AM\"}"
          },
          {
            "id": "error",
            "title": "Bild fehlgeschlagen",
            "description": "Fehlgeschlagenes Bild wird durch denselben benannten Fallback ersetzt.",
            "value": "{\"mode\":\"fallback\",\"heading\":\"Alex Morgan\",\"text\":\"AM\"}"
          }
        ],
        "technicalNotes": "Base UI kennt idle/loading/loaded/error. Das Schema zeigt einen unabhängig gezeichneten Bildersatz und den textlichen Fallback; keine echten Netzwerkübergänge.",
        "previewItems": [
          "loaded",
          "error"
        ],
        "detailsLabel": "Bild während des Ladens"
      }
    ]
  },
  "badge": {
    "variants": [
      {
        "id": "badge-variants",
        "title": "Sechs Oberflächen",
        "description": "Ein kurzer Text bleibt über alle Oberflächen gleich.",
        "layout": "compact",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "",
            "value": "{\"variant\":\"default\",\"text\":\"In Prüfung\"}"
          },
          {
            "id": "secondary",
            "title": "Sekundär",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"text\":\"In Prüfung\"}"
          },
          {
            "id": "destructive",
            "title": "Destruktiv",
            "description": "",
            "value": "{\"variant\":\"destructive\",\"text\":\"In Prüfung\"}"
          },
          {
            "id": "outline",
            "title": "Mit Umrandung",
            "description": "",
            "value": "{\"variant\":\"outline\",\"text\":\"In Prüfung\"}"
          },
          {
            "id": "ghost",
            "title": "Ohne Fläche",
            "description": "",
            "value": "{\"variant\":\"ghost\",\"text\":\"In Prüfung\"}"
          },
          {
            "id": "link",
            "title": "Textbetont",
            "description": "",
            "value": "{\"variant\":\"link\",\"text\":\"In Prüfung\"}"
          }
        ],
        "technicalNotes": "Alle CEM-Varianten als informative Spans. Die Variante link erzeugt allein keinen Link. Text und Statuszuordnung sind redaktionelle Beispiele. Die Komponente besitzt keinen eigenen Interaktionszustand."
      }
    ],
    "states": []
  },
  "aspect-ratio": {
    "variants": [
      {
        "id": "aspect-ratio-ratios",
        "title": "Drei Bildformate",
        "description": "Gleiches Motiv und gleiche Breite: Nur der sichtbare Ausschnitt ändert sich.",
        "layout": "compact",
        "items": [
          {
            "id": "16:9",
            "title": "16:9",
            "description": "",
            "value": "{\"ratio\":1.7777777777777777,\"heading\":\"Schematische Berglandschaft\"}"
          },
          {
            "id": "1:1",
            "title": "1:1",
            "description": "",
            "value": "{\"ratio\":1,\"heading\":\"Schematische Berglandschaft\"}"
          },
          {
            "id": "9:16",
            "title": "9:16",
            "description": "",
            "value": "{\"ratio\":0.5625,\"heading\":\"Schematische Berglandschaft\"}"
          }
        ],
        "technicalNotes": "ratio muss endlich und positiv sein. Das selbst gezeichnete Bergmotiv macht das Cover-Cropping sichtbar; es ist redaktionelles Bildmaterial. Die Komponente besitzt keinen eigenen Interaktionszustand."
      }
    ],
    "states": []
  },
  "carousel": {
    "variants": [
      {
        "id": "carousel-orientation",
        "title": "Zwei Richtungen",
        "description": "Dieselbe Folie mit seitlichen oder übereinander liegenden Richtungszeichen.",
        "layout": "wide",
        "items": [
          {
            "id": "horizontal",
            "title": "Horizontal",
            "description": "Pfeile und Folie stehen nebeneinander.",
            "value": "{\"orientation\":\"horizontal\",\"index\":1,\"heading\":\"Entdecken\",\"text\":\"Projekt Atlas\",\"footer\":\"Folie 2 von 3\"}"
          },
          {
            "id": "vertical",
            "title": "Vertikal",
            "description": "Pfeile und Folie stehen übereinander.",
            "value": "{\"orientation\":\"vertical\",\"index\":1,\"heading\":\"Entdecken\",\"text\":\"Projekt Atlas\",\"footer\":\"Folie 2 von 3\"}"
          }
        ],
        "technicalNotes": "Embla besitzt Track und Snapposition. Das Schema zeigt je einen vollständigen Slide und passive Randzeichen, keine bedienbare Navigation. Drei Folien sind redaktionelle Komposition."
      }
    ],
    "states": [
      {
        "id": "carousel-boundaries",
        "title": "Anfang und Ende",
        "description": "Am Rand ist jeweils eine Richtung nicht verfügbar.",
        "layout": "wide",
        "items": [
          {
            "id": "first",
            "title": "Erste Folie",
            "description": "Die Richtung zum Anfang ist an der ersten Folie abgeschwächt.",
            "value": "{\"orientation\":\"horizontal\",\"index\":0,\"heading\":\"Projektübersicht\",\"text\":\"Projekt Atlas\",\"footer\":\"Folie 1 von 3\"}"
          },
          {
            "id": "middle",
            "title": "Mittlere Folie",
            "description": "Beide Richtungen stehen zwischen Anfang und Ende zur Verfügung.",
            "value": "{\"orientation\":\"horizontal\",\"index\":1,\"heading\":\"Projektübersicht\",\"text\":\"Projekt Atlas\",\"footer\":\"Folie 2 von 3\"}"
          },
          {
            "id": "last",
            "title": "Letzte Folie",
            "description": "Die Richtung zum Ende ist an der letzten Folie abgeschwächt.",
            "value": "{\"orientation\":\"horizontal\",\"index\":2,\"heading\":\"Projektübersicht\",\"text\":\"Projekt Atlas\",\"footer\":\"Folie 3 von 3\"}"
          }
        ],
        "technicalNotes": "Nicht schleifende Beispielkomposition: canScrollPrev/canScrollNext bestimmen die deaktivierte Richtung. Zeichen sind im Vergleich rein illustrativ.",
        "previewItems": [
          "first",
          "last"
        ],
        "detailsLabel": "Mittlere Position"
      }
    ]
  },
  "separator": {
    "variants": [
      {
        "id": "separator-orientation",
        "title": "Horizontal oder vertikal",
        "description": "Dieselben Inhaltsbereiche mit unterschiedlicher Trennrichtung.",
        "layout": "wide",
        "items": [
          {
            "id": "horizontal",
            "title": "Horizontal",
            "description": "Der Host bestimmt die verfügbare Länge.",
            "value": "{\"orientation\":\"horizontal\",\"heading\":\"Projekt\",\"text\":\"Aktivität\"}"
          },
          {
            "id": "vertical",
            "title": "Vertikal",
            "description": "Der Host bestimmt die verfügbare Länge.",
            "value": "{\"orientation\":\"vertical\",\"heading\":\"Projekt\",\"text\":\"Aktivität\"}"
          }
        ],
        "technicalNotes": "Ein nicht fokussierbarer Separator, kein verschiebbarer Splitter. Beispieltexte sind redaktionell; 1 px Linie entspricht dem Contract. Die Komponente besitzt keinen eigenen Interaktionszustand."
      }
    ],
    "states": []
  },
  "code-block": {
    "variants": [
      {
        "id": "code-block-lines",
        "title": "Zeilennummern",
        "description": "Derselbe Code mit und ohne Nummern.",
        "technicalNotes": "default/destructive, default/sm, wrap und lineNumbers sind belegte Optionen. Syntaxfarben und Ausführung werden nicht versprochen; der Code ist redaktioneller Text.",
        "layout": "wide",
        "items": [
          {
            "id": "numbered",
            "title": "Mit Zeilennummern",
            "description": "Nummern gehören nicht zum Kopierwert.",
            "value": "{\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          },
          {
            "id": "plain",
            "title": "Ohne Nummern",
            "description": "Derselbe Code bleibt auswählbarer Text.",
            "value": "{\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          }
        ]
      },
      {
        "id": "code-block-density",
        "title": "Schriftgrösse",
        "description": "Derselbe Code mit normaler und kompakter Schrift.",
        "technicalNotes": "default/destructive, default/sm, wrap und lineNumbers sind belegte Optionen. Syntaxfarben und Ausführung werden nicht versprochen; der Code ist redaktioneller Text.",
        "layout": "wide",
        "items": [
          {
            "id": "numbered",
            "title": "Mit Zeilennummern",
            "description": "Nummern gehören nicht zum Kopierwert.",
            "value": "{\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          },
          {
            "id": "small",
            "title": "Kompakte Schrift",
            "description": "12/16 px statt 14/20 px.",
            "value": "{\"size\":\"sm\",\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          }
        ]
      },
      {
        "id": "code-block-surface",
        "title": "Fehlerrand",
        "description": "Nur die Umrandung ändert sich.",
        "technicalNotes": "default/destructive, default/sm, wrap und lineNumbers sind belegte Optionen. Syntaxfarben und Ausführung werden nicht versprochen; der Code ist redaktioneller Text.",
        "layout": "wide",
        "items": [
          {
            "id": "numbered",
            "title": "Mit Zeilennummern",
            "description": "Nummern gehören nicht zum Kopierwert.",
            "value": "{\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          },
          {
            "id": "destructive",
            "title": "Mit Fehlerrand",
            "description": "Äusserer Fehlerrand ist keine Laufzeitfehlermeldung.",
            "value": "{\"variant\":\"destructive\",\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          }
        ],
        "previewItems": [
          "destructive"
        ],
        "detailsLabel": "Standard ohne Fehlerrand"
      },
      {
        "id": "code-block-wrap",
        "title": "Lange Zeilen",
        "description": "Lange Zeile horizontal lesen oder innerhalb der Fläche umbrechen.",
        "technicalNotes": "default/destructive, default/sm, wrap und lineNumbers sind belegte Optionen. Syntaxfarben und Ausführung werden nicht versprochen; der Code ist redaktioneller Text.",
        "layout": "wide",
        "items": [
          {
            "id": "numbered",
            "title": "Mit Zeilennummern",
            "description": "Nummern gehören nicht zum Kopierwert.",
            "value": "{\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          },
          {
            "id": "wrapped",
            "title": "Mit Zeilenumbruch",
            "description": "Lange Zeile bricht innerhalb der Fläche um.",
            "value": "{\"wrap\":true,\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\"}"
          }
        ],
        "previewItems": [
          "wrapped"
        ],
        "detailsLabel": "Lange Zeile ohne Umbruch"
      }
    ],
    "states": [
      {
        "id": "code-block-copy",
        "title": "Rückmeldung beim Kopieren",
        "description": "Nur der Aktionsbereich ändert sich; der Code bleibt gleich.",
        "layout": "wide",
        "items": [
          {
            "id": "ready",
            "title": "Kopieren",
            "description": "",
            "value": "{\"copy\":\"Kopieren\",\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\",\"mode\":\"copy-header\"}"
          },
          {
            "id": "copied",
            "title": "Kopiert",
            "description": "",
            "value": "{\"copy\":\"Kopiert\",\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\",\"mode\":\"copy-header\"}"
          },
          {
            "id": "disabled",
            "title": "Kopieren deaktiviert",
            "description": "",
            "value": "{\"copy\":\"Kopieren deaktiviert\",\"numbered\":true,\"heading\":\"atlas.ts · Beispieldaten\",\"rows\":[[\"7\",\"const projekt = \\\"Atlas\\\";\"],[\"8\",\"+ const neu = 1;\"],[\"9\",\"- const entfernt = 0;\"],[\"10\",\"console.log(projekt, \\\"Die geprüfte Quartalsübersicht ist jetzt für das gesamte Projektteam verfügbar.\\\");\"]],\"footer\":\"+ hinzugefügt · − entfernt · Hintergrund: hervorgehoben\",\"mode\":\"copy-header\"}"
          }
        ],
        "technicalNotes": "CopyButton setzt copied nur nach erfolgreichem Clipboard-Promise und setzt nach 2000 ms zurück. Hier findet kein Kopiervorgang statt; Fehler werden im Quellcode still behandelt.",
        "previewItems": [
          "ready",
          "copied"
        ],
        "detailsLabel": "Deaktiviertes Kopieren"
      }
    ]
  },
  "bubble": {
    "variants": [
      {
        "id": "bubble-variants",
        "title": "Oberflächen direkt vergleichen",
        "description": "Gleiche Sprecherin, gleiche Nachricht.",
        "layout": "compact",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "",
            "value": "{\"variant\":\"default\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          },
          {
            "id": "secondary",
            "title": "Sekundär",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          },
          {
            "id": "muted",
            "title": "Gedämpft",
            "description": "",
            "value": "{\"variant\":\"muted\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          },
          {
            "id": "tinted",
            "title": "Hellblau getönt",
            "description": "",
            "value": "{\"variant\":\"tinted\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          },
          {
            "id": "outline",
            "title": "Mit Umrandung",
            "description": "",
            "value": "{\"variant\":\"outline\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          },
          {
            "id": "ghost",
            "title": "Ohne Fläche",
            "description": "",
            "value": "{\"variant\":\"ghost\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          },
          {
            "id": "destructive",
            "title": "Destruktiv",
            "description": "",
            "value": "{\"variant\":\"destructive\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          }
        ],
        "technicalNotes": "Alle tatsächlichen Varianten; default entspricht der primären Darstellung. Sprecher und Nachricht sind redaktionelle Beispiele. Tinted behält das feste helle Farbpaar. Die Komponente besitzt keinen eigenen Interaktionszustand.",
        "previewItems": [
          "default",
          "secondary",
          "tinted",
          "outline"
        ],
        "detailsLabel": "Weitere Oberflächen"
      },
      {
        "id": "bubble-alignment",
        "title": "Nachricht ausrichten",
        "description": "Die Sprecherin bleibt benannt; nur die Ausrichtung ändert sich.",
        "layout": "compact",
        "items": [
          {
            "id": "start",
            "title": "Am Anfang",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"start\"}"
          },
          {
            "id": "end",
            "title": "Am Ende",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"align\":\"end\"}"
          }
        ],
        "technicalNotes": "Ausrichtung ist keine Zustell- oder Sendestatusangabe."
      },
      {
        "id": "bubble-reactions",
        "title": "Reaktion positionieren",
        "description": "Derselbe Zähler überlappt die Nachricht an unterschiedlichen Ecken.",
        "layout": "compact",
        "items": [
          {
            "id": "top-start",
            "title": "Oben · am Anfang",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"reactionSide\":\"top\",\"reactionAlign\":\"start\",\"footer\":\"♡ 2\"}"
          },
          {
            "id": "top-end",
            "title": "Oben · am Ende",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"reactionSide\":\"top\",\"reactionAlign\":\"end\",\"footer\":\"♡ 2\"}"
          },
          {
            "id": "bottom-start",
            "title": "Unten · am Anfang",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"reactionSide\":\"bottom\",\"reactionAlign\":\"start\",\"footer\":\"♡ 2\"}"
          },
          {
            "id": "bottom-end",
            "title": "Unten · am Ende",
            "description": "",
            "value": "{\"variant\":\"secondary\",\"heading\":\"Mira\",\"text\":\"Entwurf bereit.\",\"reactionSide\":\"bottom\",\"reactionAlign\":\"end\",\"footer\":\"♡ 2\"}"
          }
        ],
        "technicalNotes": "side=top/bottom und align=start/end gehören zu BubbleReactions. Das passive Beispiel zeigt einen redaktionellen Zähler und keine anklickbare Reaktion.",
        "previewItems": [
          "top-start",
          "bottom-end"
        ],
        "detailsLabel": "Weitere Reaktionspositionen"
      }
    ],
    "states": []
  },
  "message-scroller": {
    "variants": [
      {
        "id": "message-scroller-composition",
        "title": "Gesprächsverlauf",
        "description": "Benannte Nachrichten in zeitlicher Reihenfolge.",
        "layout": "full",
        "items": [
          {
            "id": "log",
            "title": "Verlauf mit stabiler Reihenfolge",
            "description": "Drei benannte Nachrichten in chronologischer Reihenfolge.",
            "value": "{\"heading\":\"Projektgespräch\",\"rows\":[[\"Mira\",\"Ist der Entwurf bereit?\"],[\"Alex\",\"Ja, die Tabellen sind geprüft.\"],[\"Mira\",\"Dann ergänze ich die Diagramme.\"]]}"
          }
        ],
        "technicalNotes": "Provider und Hooks sind Controller. Das Schema bildet Viewport, Content und benannte Nachrichten ab; es misst keine echten Positionen und simuliert keinen Transport."
      }
    ],
    "states": [
      {
        "id": "message-scroller-positions",
        "title": "Leseposition behalten",
        "description": "Am Ende folgen oder frühere Nachrichten lesen.",
        "layout": "wide",
        "items": [
          {
            "id": "following-end",
            "title": "Neueste Nachricht sichtbar",
            "description": "Die Ansicht hält die neueste Nachricht am unteren Rand.",
            "value": "{\"position\":\"following-end\",\"heading\":\"Projektgespräch\",\"rows\":[[\"Mira\",\"Ist der Entwurf bereit?\"],[\"Alex\",\"Ja, die Tabellen sind geprüft.\"],[\"Mira\",\"Dann ergänze ich die Diagramme.\"]]}"
          },
          {
            "id": "reading-start",
            "title": "Ältere Nachrichten lesen",
            "description": "Die ältesten Nachrichten bleiben oben; der Pfeil weist zum Ende.",
            "value": "{\"position\":\"reading-start\",\"heading\":\"Projektgespräch\",\"rows\":[[\"Mira\",\"Ist der Entwurf bereit?\"],[\"Alex\",\"Ja, die Tabellen sind geprüft.\"],[\"Mira\",\"Dann ergänze ich die Diagramme.\"]]}"
          },
          {
            "id": "pending",
            "title": "Position wird vorbereitet",
            "description": "Der Nachrichtenbereich bleibt bis zur initialen Position ausgeblendet.",
            "value": "{\"position\":\"pending\",\"heading\":\"Projektgespräch\",\"rows\":[[\"Mira\",\"Ist der Entwurf bereit?\"],[\"Alex\",\"Ja, die Tabellen sind geprüft.\"],[\"Mira\",\"Dann ergänze ich die Diagramme.\"]]}"
          },
          {
            "id": "empty",
            "title": "Noch keine Nachrichten",
            "description": "Ein kurzer Text benennt den leeren Gesprächsverlauf.",
            "value": "{\"position\":\"empty\",\"heading\":\"Projektgespräch\",\"text\":\"Noch keine Nachrichten.\"}"
          }
        ],
        "technicalNotes": "Following-end, reading-start und pending beschreiben die belegten Quellenzustände. Passive Richtungszeichen markieren verfügbare Richtungen; sie sind keine bedienbaren Schaltflächen.",
        "previewItems": [
          "following-end",
          "reading-start"
        ],
        "detailsLabel": "Vorbereitung und leerer Verlauf"
      }
    ]
  },
  "attachment": {
    "variants": [
      {
        "id": "attachment-size",
        "title": "Drei Dateizeilen",
        "description": "Gleiche Datei und Metadaten in drei Grössen.",
        "layout": "wide",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "40-px-Dateisymbol und Metadaten nebeneinander.",
            "value": "{\"size\":\"default\",\"orientation\":\"horizontal\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"PDF · 2,4 MB · Beispieldaten\"}"
          },
          {
            "id": "sm",
            "title": "Kompakt",
            "description": "32-px-Dateisymbol mit kompakter 12/16-px-Metazeile.",
            "value": "{\"size\":\"sm\",\"orientation\":\"horizontal\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"PDF · 2,4 MB · Beispieldaten\"}"
          },
          {
            "id": "xs",
            "title": "Sehr kompakt",
            "description": "28-px-Dateisymbol für die kleinste Zeile.",
            "value": "{\"size\":\"xs\",\"orientation\":\"horizontal\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"PDF · 2,4 MB · Beispieldaten\"}"
          }
        ],
        "technicalNotes": "Grösse, Richtung und Media-Darstellung sind Optionen. Vorschaubild und Metadaten sind redaktionell; keine Datei wird geöffnet oder hochgeladen.",
        "previewItems": [
          "default",
          "xs"
        ],
        "detailsLabel": "Weitere Dateigrösse"
      },
      {
        "id": "attachment-orientation",
        "title": "Zeile oder Bildkachel",
        "description": "Dieselbe Datei mit seitlichem Symbol oder Vorschau über dem Namen.",
        "layout": "wide",
        "items": [
          {
            "id": "horizontal",
            "title": "Horizontal",
            "description": "Fluid breite Dateizeile mit 40-px-Symbol.",
            "value": "{\"size\":\"default\",\"orientation\":\"horizontal\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"PDF · 2,4 MB · Beispieldaten\"}"
          },
          {
            "id": "vertical",
            "title": "Vertikal",
            "description": "120-px-Kachel mit Bildschema über dem Dateinamen.",
            "value": "{\"size\":\"default\",\"orientation\":\"vertical\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"PDF · 2,4 MB · Beispieldaten\"}"
          }
        ],
        "technicalNotes": "Grösse, Richtung und Media-Darstellung sind Optionen. Vorschaubild und Metadaten sind redaktionell; keine Datei wird geöffnet oder hochgeladen."
      }
    ],
    "states": [
      {
        "id": "attachment-states",
        "title": "Dateistatus benennen",
        "description": "Dateiname und lesbarer Status bleiben zusammen.",
        "layout": "wide",
        "items": [
          {
            "id": "idle",
            "title": "Bereit",
            "description": "",
            "value": "{\"state\":\"idle\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"Bereit zum Hochladen\"}"
          },
          {
            "id": "uploading",
            "title": "Wird hochgeladen",
            "description": "",
            "value": "{\"state\":\"uploading\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"Wird hochgeladen\"}"
          },
          {
            "id": "processing",
            "title": "Wird verarbeitet",
            "description": "",
            "value": "{\"state\":\"processing\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"Wird verarbeitet\"}"
          },
          {
            "id": "error",
            "title": "Fehlgeschlagen",
            "description": "",
            "value": "{\"state\":\"error\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"Upload fehlgeschlagen. Verbindung prüfen.\"}"
          },
          {
            "id": "done",
            "title": "Abgeschlossen",
            "description": "",
            "value": "{\"state\":\"done\",\"heading\":\"quartalsbericht.pdf\",\"text\":\"Upload abgeschlossen\"}"
          }
        ],
        "technicalNotes": "state ist Styling, kein Upload-Automat. Die tatsächliche asynchrone Anwendung setzt idle/uploading/processing/error/done. Hier werden nur benannte Ansichten gezeigt.",
        "previewItems": [
          "uploading",
          "error"
        ],
        "detailsLabel": "Weitere Dateistatus"
      }
    ]
  },
  "marker": {
    "variants": [
      {
        "id": "marker-variants",
        "title": "Hinweis und Trennlinien",
        "description": "Derselbe Hinweis frei stehend, zwischen Linien oder mit unterem Rand.",
        "layout": "wide",
        "items": [
          {
            "id": "default",
            "title": "Ohne Linie",
            "description": "Der Hinweis steht frei im Inhalt.",
            "value": "{\"variant\":\"default\",\"text\":\"Ungelesene Nachrichten\"}"
          },
          {
            "id": "separator",
            "title": "Zwischen Linien",
            "description": "Flexible Linien rahmen denselben Hinweis ein.",
            "value": "{\"variant\":\"separator\",\"text\":\"Ungelesene Nachrichten\"}"
          },
          {
            "id": "border",
            "title": "Mit unterem Rand",
            "description": "Eine untere Linie grenzt den Hinweis vom Folgeinhalt ab.",
            "value": "{\"variant\":\"border\",\"text\":\"Ungelesene Nachrichten\"}"
          }
        ],
        "technicalNotes": "Alle drei Varianten ändern die Darstellung. Der standardmässige div erhält dadurch weder Statusrolle noch Aktion. Die Komponente besitzt keinen eigenen Interaktionszustand.",
        "previewItems": [
          "default",
          "separator"
        ],
        "detailsLabel": "Hinweis mit unterem Rand"
      }
    ],
    "states": []
  },
  "trace": {
    "variants": [
      {
        "id": "trace-composition",
        "title": "Details einblenden",
        "description": "Dieselbe Prüfzeile mit geschlossenen und offenen Details.",
        "layout": "wide",
        "items": [
          {
            "id": "closed",
            "title": "Details geschlossen",
            "description": "Nur Titel, Beschreibung und geschlossenes Richtungszeichen bleiben sichtbar.",
            "value": "{\"open\":false,\"heading\":\"Bericht prüfen\",\"text\":\"2 Tabellen\",\"footer\":\"Spalten und Summen wurden geprüft.\"}"
          },
          {
            "id": "open",
            "title": "Details offen",
            "description": "Unter der Zeile stehen die eingerückten Prüfergebnisse.",
            "value": "{\"open\":true,\"heading\":\"Bericht prüfen\",\"text\":\"2 Tabellen\",\"footer\":\"Spalten und Summen wurden geprüft.\"}"
          }
        ],
        "technicalNotes": "TraceLine ist passiv; die optionale Offenlegung delegiert an Collapsible. Titel, Beschreibung und Details sind redaktioneller Inhalt."
      }
    ],
    "states": [
      {
        "id": "trace-status",
        "title": "Prüfstatus benennen",
        "description": "Text und Symbol zeigen den Status derselben Aufgabe.",
        "layout": "wide",
        "items": [
          {
            "id": "default",
            "title": "Bericht prüfen",
            "description": "Neutrale Zeile ohne gesetzten Status.",
            "value": "{\"status\":\"default\",\"heading\":\"Bericht prüfen\",\"text\":\"Ohne Statuswert\"}"
          },
          {
            "id": "running",
            "title": "Prüfung läuft",
            "description": "Der Titel benennt die laufende Prüfung.",
            "value": "{\"status\":\"running\",\"heading\":\"Bericht prüfen\",\"text\":\"Zwei Tabellen werden geprüft\"}"
          },
          {
            "id": "error",
            "title": "Prüfung fehlgeschlagen",
            "description": "Rote Zeile mit ausgeschriebenem Fehlergrund.",
            "value": "{\"status\":\"error\",\"heading\":\"Bericht prüfen\",\"text\":\"Verbindung nicht verfügbar\"}"
          },
          {
            "id": "pending",
            "title": "Prüfung ausstehend",
            "description": "Reduzierte Deckkraft und ausdrücklicher Wartetext.",
            "value": "{\"status\":\"pending\",\"heading\":\"Bericht prüfen\",\"text\":\"Wartet auf Daten\"}"
          }
        ],
        "technicalNotes": "running/error/pending sind optionale TraceLine-Statuswerte. Ohne Status ist keine automatische Erfolgsmeldung definiert; es gibt keinen Ausführungs- oder Retry-Automaten.",
        "previewItems": [
          "running",
          "error"
        ],
        "detailsLabel": "Neutraler und ausstehender Status"
      }
    ]
  }
}

export function getDataContentComparisons(component: string, section: ComparisonSection): ComponentComparison[] {
  return (comparisons[component]?.[section] ?? []).map(group => ({ ...group, sourceReferences: sources[component] }))
}
