

const menuItems = [
    {
      category: "Coffee & Espresso",
      items: [
        { name: "Espresso", description: "A rich, full-bodied shot of pure coffee perfection.", price: "$3.00", image: "./src/assets/espresso.jpg", link: "https://www.freepik.com/free-photo/close-up-coffee-cup-wooden-table-caf_5000525.htm#fromView=search&page=1&position=10&uuid=203688cf-1654-48b6-a7b6-f4e779102d4e", creator: "freepik" },
        { name: "Americano", description: "Espresso with hot water for a smooth, robust flavor.", price: "$3.50", image: "./src/assets/americano.jpg", link: "https://www.freepik.com/free-photo/cup-black-coffee-isolated-generative-al_38937041.htm#fromView=search&page=1&position=25&uuid=daa87c03-c925-4814-8af2-2d84e87df04f", creator: "pvproductions on Freepik" },
        { name: "Cappuccino" , description: "Espresso with steamed milk and a thick layer of foam" , price: "$4.00", image: "./src/assets/cappucinno.jpg" , link: "https://www.freepik.com/free-photo/top-view-hot-espresso-with-brown-coffee-seeds-brown-wooden-desk-coffee-cup-drink_10186901.htm#fromView=search&page=1&position=11&uuid=cd4da2f2-900f-498d-aa4d-c3f9762b9835", creator: "KamranAydinov on Freepik"},
      ],
    },
    {
      category: "Specialty Coffees",
      items: [
        { name: "Caramel Macchiato", description: "Espresso, steamed milk, and vanilla syrup, topped with caramel drizzle.", price: "$5.50", image: "./src/assets/caramel-macchiatto.jpg" },
        { name: "Hazelnut Latte", description: "Espresso with steamed milk and hazelnut syrup.", price: "$5.00", image: "./src/assets/hazelnut.jpg", link: "https://www.freepik.com/free-photo/hot-chocolate-with-marshmallows-cup_4822060.htm#fromView=search&page=2&position=0&uuid=6fe8a727-8753-46dc-ae3b-f838f6dd3cbf", creator: "freepik"},
        // Add other items here
      ],
    },
    {
      category: "Cold Beverages",
      items: [
        { name: 'Ice Coffe' , description: 'Refreshing cold brew coffee served over ice', price: "$4.00" , image: "src/assets/ice-coffe.jpg", link:"https://www.freepik.com/free-photo/iced-chocolate_1246049.htm#fromView=search&page=2&position=4&uuid=1299a1e0-1c4f-4ebd-a568-023a41683005", creator:  'topntp26 on Freepik'},
        { name: 'Iced Latte' , description: 'Espresso with cold milk, served over ice' , price: "$5.50" , image: "src/assets/ice-latte.jpg", link: "https://www.freepik.com/free-photo/close-up-glass-coffee-milk_5180349.htm#fromView=search&page=1&position=22&uuid=35f6d40e-6345-48e1-b9a6-f9cbd00d3f3d", creator: "freepik"},
        { name: 'Iced Mocha' , description: 'Espresso, cold milk, and chocolate syrup, served over ice and topped with whipped cream' ,price: "$5.50" , image: "src/assets/ice-mocha.jpg", link: "https://www.freepik.com/free-photo/chocolate-frappe-with-vanilla-ice-cream_1242045.htm#fromView=search&page=1&position=36&uuid=b70e5885-3156-4b49-b5bf-0d45196d4824", creator: "topntp26 on Freepik"},
      ],
    }
  ];
  
  

  function MenuPage(){
    return (
      <div className="menu">
        <h1>O&apos;Cafe Menu</h1>
        {menuItems.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.category}</h2>
            <div key={index} className="categoryList">
            {category.items.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} height={"100px"}/>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  

export default MenuPage;