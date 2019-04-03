import React, { Component } from 'react';
import Card from './Card';


class ProductList extends Component {
    constructor(props){
      super(props);
      
        this.state={
            items: [
                {
                itemId: 426185816,
                name: "Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink",
                salePrice: 119.99,
                shortDescription: "Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes. Kids can drive freely on their own, but parents can step in with a remote control to make sure they stay out of danger for peace of mind. Built large and scaled small for your little one's biggest adventures.FEATURES:Realistic driving experience with foot pedal acceleration and steering wheelPowerful 6V motor with 2.5 mph max speed and 3 speed modesIncludes remote control with speed selection and parking modeBuilt-in AUX jack, headlights, horn, and easy start/stop buttonRechargeable battery with charger allows for hour of playtimeRecommended for ages: 2+ yearsDIMENSIONS:Overall Dimensions: 37.5&quot;(L) x 24&quot;(W) x 19.5&quot;(H)Weight: 24 lbs.Weight Capacity: 44 lbs.SPECIFICATIONS:Material: Plastic, MetalMax Speed: 2.5 mphCharge Time: 8 - 12 hoursRun TIme: 1 - 2 hoursBattery Type: 6V 7AHCharger Type: DC 6V 700MAIncludes: Ride-on car, Remote control, ChargerAssembly required (with instructions)ASTM-certifiedBCP SKU: SKY4622",
                mediumImage: "https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                },
                {
                itemId: 54987375,
                name: "Disney/Pixar Cars 3 Lightning McQueen 20-Inch Vehicle",
                salePrice: 9.99,
                shortDescription: "Disney/Pixar Cars fans get big action with this 20&quot; Lightning McQueen vehicle! The favorite leading character features iconic colors, race styling and comes ready for awesome push around play!",
                mediumImage: "https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
                },
                {
                itemId: 21984627,
                name: "Hot Wheels 9-Car Gift Pack Collection (Styles May Vary)",
                salePrice: 9.47,
                shortDescription: "Help expand your little one's toy collection with the Hot Wheels 9-Pack Cars set. Whether your boy is adding to his arsenal or just starting to build his own, this package features exclusive graphics and designs that will surely excite any fan. This Hot Wheels gift pack features an interesting mix of cars and trucks in a variety of colors. Each of the die-cast vehicles is 1:64 scale. Combine its contents with the other Hot Wheels merchandise and models for hours of fun. This item is suited for kids age three years and older. Makes a wonderful gift for any occasion.",
                mediumImage: "https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                }
                
                ],
        }
    }
  render() {


      let listOfItemsDisplayed='';
        if(this.props.search ==''){
            
            listOfItemsDisplayed = this.state.items.map((product, index) => {
                return <Card key={index} details={product} />
            })
        }
        else{
            let filteritems = this.state.items.filter((product,index)=>{
             return product.name.includes(this.props.search);
            });
            listOfItemsDisplayed = filteritems.map((product,index)=>{
                return <Card key={index} details={product}/>
            })
        }
        

    return (
      <div className="App">
        {listOfItemsDisplayed}
      </div>
    );
  }
}

export default ProductList;
