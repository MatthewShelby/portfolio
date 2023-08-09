
function writeSkils() {
      console.info('write skills')
      var techSkils = new Array()
      var softSkils = new Array()
      MySkills.forEach(element => {
            if (element.type == 'Tech') {
                  techSkils.push(element)
            }
            else if (element.type == 'Soft') {
                  softSkils.push(element)
            }
            else {
                  console.error('The Skill type is unknown');
                  console.info(element)

            }
      });
      console.info(techSkils)
      var higherLenght = (techSkils.length >= softSkils.length) ? techSkils.length : softSkils.length

      var tbody = '';


      for (let i = 0; i < higherLenght; i++) {

            var ttd = ''
            var std = ''
            // forming Tech td
            if (i < techSkils.length) {

                  var rateStars = ''
                  var rateSpan = ''
                  for (let j = 0; j < techSkils[i].rate; j++) {
                        rateStars += ' <img class="star" src = "./assets/images/icon/star-full.svg" alt ="rate start" > '
                  }
                  var rateSpan = '<span title="Rated ${' + techSkils[i].rate + '} of 5" >' + rateStars + '</span>'

                  ttd = `<div class="td-box"> <span> ${techSkils[i].title}</span> ${rateSpan} </div>`


            }


            // forming Soft td
            if (i < softSkils.length) {

                  var rateStars = ''
                  var rateSpan = ''
                  for (let j = 0; j < softSkils[i].rate; j++) {
                        rateStars += ' <img class="star" src = "./assets/images/icon/star-full.svg" alt = "rate start" > '
                  }
                  var rateSpan = '<span title="Rated ${' + softSkils[i].rate + '} of 5">' + rateStars + '</span>'

                  var std = `<div class="td-box"> <span> ${softSkils[i].title}</span> ${rateSpan} </div>`

            }

            var tr = ` <tr> <td>${ttd}</td> <td>${std}</td> </tr>`
            tbody += tr;
            console.log('tr number: ' + i)
      }
      document.getElementById('skills-tbody').innerHTML = tbody

}

var MySkills = [
      new Skill('Solidity', 5, 'Tech'),
      new Skill('EVM', 5, 'Tech'),
      new Skill('Smart Contract', 5, 'Tech'),
      new Skill('Ethers', 5, 'Tech'),
      new Skill('Blockchain', 5, 'Tech'),
      new Skill('ERC-20 - 721 - 1155', 5, 'Tech'),
      new Skill('HD wallet & Ledgers', 5, 'Tech'),
      new Skill('JavaScript', 5, 'Tech'),
      new Skill('UX Development', 5, 'Tech'),
      new Skill('API, Blockchain Integration', 5, 'Tech'),
      new Skill('C# Programing', 5, 'Tech'),
      new Skill('ASP.NET Core Backend', 5, 'Tech'),
      new Skill('System Architecture', 5, 'Tech'),
      new Skill('NodeJS Server', 4, 'Tech'),
      new Skill('No-SQL DBMS', 4, 'Tech'),
      new Skill('Git', 4, 'Tech'),
      new Skill('Development Life Cycle', 3, 'Tech'),
      new Skill('Figma', 3, 'Tech'),


      new Skill('Project Management', 5, 'Soft'),
      new Skill('Problem-Solving', 5, 'Soft'),
      new Skill('Result-Driven', 5, 'Soft'),
      new Skill('Communication', 4, 'Soft'),
      new Skill('Documentation', 4, 'Soft'),
      new Skill('Organization', 4, 'Soft'),
      new Skill('Teamwork & Collaboration', 4, 'Soft'),
      new Skill('Team Management', 3, 'Soft'),

]

function WritePosts() {
      var all = ''
      allProjects.forEach(element => {

            var techs = ''
            element.Technologies.forEach(elem => {
                  techs += `<img src="assets/images/logo/${elem.fileName}" alt="${elem.title}" title="${elem.title}">`
            });


            var features = ''
            element.KeyFeatures.forEach(elem => {
                  features += `<li class="features-li"><b>${elem.title}:</b> ${elem.Description}  </li>`
            });


            var infos = ''
            element.Additional.forEach(elem => {
                  infos += `<a target="_blank" href="${elem.href}" title="${elem.title}">${elem.title}</a> | `
            });

            var post = `

 <div class="content-card-frame" id="pr${element._id}">
                  <div class="content-card-body">
                        <h1 class="content-card-head">${element.Heading}:</h1>

                        <div class="body-description">

                              <table class="content-table">
                                    <tr>
                                          <td class="td-title">Title</td>
                                          <td class="td-description">${element.Title}</td>
                                    </tr>
                                    <tr>
                                          <td class="td-title">Short Description</td>
                                          <td class="td-description">${element.ShortDescription}</td>
                                    </tr>
                                    <tr>
                                          <td class="td-title">Project Duration</td>
                                          <td class="td-description">${element.Duration}</td>
                                    </tr>

                                    <tr>
                                          <td class="td-title">Technologies Used</td>

                                          <td class="td-description img-row">
                                                ${techs}
                                          </td>
                                    </tr>
                                    <tr style="padding-top: 1rem;">
                                          <td class="td-title">Key Features</td>
                                          <td class="td-description">
                                                <ul>
                                                      ${features}
                                                </ul>
                                          </td>

                                    </tr>
                                    <tr>
                                          <td class="td-title">Additional Information</td>
                                          <td class="td-description">
                                               ${infos}
                                          </td>
                                    </tr>
                              </table>
                        </div>

                  </div>
                  <div class="body-img">
                        <img src="assets/images/projectsImages/${element.Image}" alt="">
                        <div class="visit-frame">
                              <a class="visit-btn" href="${element.Additional[0].href}" target="_blank" title="Visit the Website">
                                    Visit &nbsp;
                                    <img class="visit-btn-img" src="assets/images/icon/outlink.svg" alt="">
                              </a>
                        </div>
                  </div>
            </div>


`

            all += post
      });
      $('#pageLAyout').append(all);
      var end = `<div class="end">
                  <p>*More projects from my portfolio will be added soon, including previous works not featured here.
                        Stay tuned for updates!</p>
                  </div>`
      $('#pageLAyout').append(end);
}

//#region PROJECTS INFO
latest = new Project(
      '01',
      'The latest project I published',
      'Crypto Swap MVP',
      'Cryptocurrency swap platform, Where user can swap its own tokens with other tokens on the same blockchain.',
      '29 Days.',
      [
            new Technology('Binance Smart Chain', 'BSC.svg'),
            new Technology('Ethers.js', 'Ethersjs.png'),
            new Technology('ASP.NET Core 6', 'NET_Core_Logo.png'),
            new Technology('Microsoft SQL Server', 'SQL.png'),
            new Technology('NodeJS', 'node-js.svg'),
            new Technology('MongoDB', 'mongodb.svg'),
            new Technology('GitHub Pges', 'github.png'),
            new Technology('JQuery', 'jquery.svg'),
      ],
      [
            new Feature('Price Aggregation', 'Utilized calling price aggregators to find the best price for optimal trading.'),
            new Feature('Best Price Provider', 'Integrated the best price provider available at the time to ensure accurate and competitive pricing.'),
            new Feature('Liquidity Pool Swapping', 'Enabled seamless swapping through major liquidity pools to enhance liquidity and trading flexibility.'),
            new Feature('Secure Transaction Signing', 'Implemented secure transaction signing, including approval and swap operations, locally using users\' wallets for enhanced security.')
      ],
      [
            new Info('Project Website', 'https://matthewshelby.github.io/swap/'),
            //new Info('Project Technical Details', '#'),
            new Info('GitHub Repository - UI', 'https://github.com/MatthewShelby/swap'),
            new Info('GitHub Repository - Backend', 'https://github.com/MatthewShelby/swapServer')
      ],
      'Swap.png'



)
Decuple = new Project(
      '02',
      'The Decuple NFT project I Developed in the Lenzolab',
      'Decuple NFT',
      'Decuple is a "Hold to earn" NFT that is built on a "Proof of Ownwership" Protocol.',
      'Near 1 Year.',
      [
            new Technology('Binance Smart Chain', 'BSC.svg'),
            new Technology('Solidity', 'sol.svg'),
            new Technology('Ethereum Virtual Machine', 'EVM.png'),
            new Technology('Ethers.js', 'Ethersjs.png'),
            new Technology('ASP.NET Core 6', 'NET_Core_Logo.png'),
            new Technology('Microsoft SQL Server', 'SQL.png'),
            //new Technology('GitHub', 'github.png'),
            //new Technology('JQuery', 'jquery.svg'),
      ],
      [
            new Feature('Efficient Infrastructure', 'Optimized infrastructure using industry-standard protocols like ERC721, ERC20, and official standards for enhanced security, speed, and efficiency.'),
            new Feature('NFT Minting and Management', 'On Decuple, users can mint and manage NFTs from the Decuple NFT collections deployed on the Binance Smart Chain (BSC). The platform provides a seamless experience for users to create and handle their NFT assets.'),
            new Feature('Hybrid Structure', 'Utilized a hybrid on-chain/off-chain structure to ensure the highest level of security, while maintaining optimal speed and efficiency. This approach allows for enhanced scalability and reduces the strain on the blockchain network.'),
            new Feature('Low Gas Fee Marketplace', 'Integrated with popular low gas fee marketplaces like Opensea and Blur, enabling users to seamlessly buy, sell, and trade NFTs with minimal transaction costs.'),
            new Feature('Asset and Financial Management', ' Implemented a comprehensive system for users to manage their digital assets, financials, and access partner services. ')
      ],
      [
            new Info('Project Website', 'https://www.decuplenft.com'),
            //new Info('Project Technical Details', '#'),
            new Info('GitHub Repository - Smart Contract', 'https://github.com/lenzolab/DecupleNFT-ERC721'),
      ],
      'Decuple.png'
)
Blocki = new Project(
      '03',
      'Blocktop NFT, Excelled Development in the World of NFTs',
      'Blockitop NFT',
      'Blockitop is empowering early access to a play-to-earn online game through NFTs.',
      'Around 60 days.',
      [
            new Technology('Binance Smart Chain', 'BSC.svg'),
            new Technology('Solidity', 'sol.svg'),
            new Technology('Ethereum Virtual Machine', 'EVM.png'),
            new Technology('Ethers.js', 'Ethersjs.png'),
            new Technology('IPFS', 'ipfs.png'),
            // new Technology('ASP.NET Core 6', 'NET_Core_Logo.png'),
            // new Technology('Microsoft SQL Server', 'SQL.png'),
            //new Technology('GitHub', 'github.png'),
            //new Technology('JQuery', 'jquery.svg'),
      ],
      [
            new Feature('ERC721 Standard', 'Leveraging the ERC721 standard, Blockitop enables seamless minting and management of assets within the project, providing users with ownership and control over their NFTs.'),
            new Feature('Opensea Compatibility', 'The Blockitop NFT collection is made available on Opensea, one of the leading NFT marketplaces, allowing users to easily buy, sell, and trade their NFTs'),
            new Feature('Web3 Integration', 'Blockitop seamlessly integrates with Web3 protocols, ensuring a fast and secure experience for users interacting with the project. This integration allows for efficient and reliable interactions with blockchain technology.'),
            new Feature('IPFS Integration', 'Blockitop utilizes IPFS (InterPlanetary File System) for permanent and immutable storage of NFT-related data. '),
      ],
      [
            new Info('Project Website', 'https://blocki.top'),
            //new Info('Project Technical Details', '#'),
            new Info('GitHub Repository - Smart Contract', 'https://github.com/MatthewShelby/blockitop'),
      ],
      'BlockitopOpt.png'
)
BitWal = new Project(
      '04',
      'BitcoinWallet MVP - Exploring the Power of HD Wallet Technology:',
      'Bitcoin Wallet',
      'Check out my BitcoinWallet MVP mini project, where the power of HD wallet technology takes center stage. This project serves as a showcase of my expertise in harnessing newly-raised technologies to create innovative solutions. Witness firsthand the seamless integration of HD wallet structure, offering enhanced privacy and flexibility, paving the way for future advancements in cryptocurrency management.',
      'Around 1 month.',
      [
            new Technology('Bitcoin Blockchain', 'Bitcoin.svg'),
            // new Technology('Solidity', 'sol.svg'),
            // new Technology('Ethereum Virtual Machine', 'EVM.png'),
            // new Technology('Ethers.js', 'Ethersjs.png'),
            // new Technology('IPFS', 'ipfs.png'),
            new Technology('NodeJS', 'node-js.svg'),
            new Technology('Render', 'render.svg'),
            new Technology('MongoDB', 'mongodb.svg'),
            new Technology('Blockcypher', 'BlockCypher.svg'),
            new Technology('GitHub Pges', 'github.png'),
            new Technology('JQuery', 'jquery.svg'),
            // new Technology('ASP.NET Core 6', 'NET_Core_Logo.png'),
            // new Technology('Microsoft SQL Server', 'SQL.png'),
            //new Technology('GitHub', 'github.png'),
            //new Technology('JQuery', 'jquery.svg'),
      ],
      [
            new Feature('HD Wallet Structure', 'Embrace enhanced privacy and flexibility with our implementation of Hierarchical Deterministic (HD) wallet structure. Safeguard multiple addresses and transactions while maintaining a high level of security.'),
            new Feature('MVP Functionality', 'Witness essential functionalities tailored to the specific needs of a Bitcoin wallet, setting the foundation for a fully-fledged and secure cryptocurrency management platform.'),
            new Feature('On-Demand Wallet Generation', 'The system automatically generates new wallets and dedicates them to new users upon registration, ensuring a seamless onboarding experience.'),
            new Feature('Enhanced Security', "Rest assured that the private keys of user's wallets are never stored in the database or any other location and are never revealed to anyone, ensuring top-notch security for your digital assets."),
      ],
      [
            new Info('Project Website', 'https://matthewshelby.github.io/BitcoinWallet'),
            //new Info('Project Technical Details', '#'),
            new Info('GitHub Repository - UI', 'https://github.com/MatthewShelby/BitcoinWallet'),
            new Info('GitHub Repository - Server', 'https://github.com/MatthewShelby/BWServer'),
      ],
      'BitcoinWallet.png'
)


console.log('latest.Title: ' + latest.Title)
var allProjects = [latest, Decuple, Blocki, BitWal]
//#endregion PROJECTS INFO
