import React from 'react'

const Forthcomponent = () => {

    // below we declare two variables
    const name = "Joseph";
    let age =35;
    let weight = 48;

  return (
    <div>
      <h2>Welcome to the forth component</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore reiciendis mollitia, velit, odio perferendis distinctio dolores quisquam sequi soluta, explicabo molestiae quod. Nostrum consectetur fugit veritatis quis quibusdam dolore.</p>
      
      {/* Below is how we bind/show the variable contents */}
      <h3>My name is {name}. </h3>
      <h3>My age is {age}. </h3>
      <h3>My weight is {weight}. </h3>

      {/* Bootstrap grid system */}
      <div className="row">
        <div className="col-md-6 bg-danger">1</div>
        <div className="col-md-6 bg-primary">2</div>

        {/* below is a grid system with three partitions */}
        <div className="row">
          <div className="col-md-4">
            <h1>First Division</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore facere accusantium, ex dolorem facilis dolorum quibusdam fugiat doloribus sit ipsa tenetur nobis est quidem necessitatibus aliquid impedit ratione quos!</p>
          </div>
          <div className="col-md-4">
            <h1>Second Division</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae assumenda aperiam tenetur ut earum totam, repudiandae dolorum autem, minima officia fuga omnis libero commodi illum voluptatem at sunt nesciunt?</p>
          </div>
          <div className="col-md-4">
            <h1>Third Division</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ut quod quisquam optio itaque architecto quo laborum repudiandae vel, tenetur deleniti? Consequatur incidunt voluptatibus porro, laborum cupiditate reiciendis deserunt suscipit.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h1>Number One</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolorem laudantium dolore consequatur maiores praesentium ullam delectus rem harum commodi error at, corporis atque nobis, necessitatibus quibusdam vitae illo temporibus.</p>
          </div>
          <div className="col-md-3">
            <h1>Number Two</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea itaque ad error? Libero ipsa sint excepturi iste similique alias officia magni ullam, optio ea perspiciatis nobis sunt dolor cupiditate?</p>
          </div>
          <div className="col-md-3">
            <h1>Number Three</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae vel recusandae veritatis, possimus, molestiae quos omnis architecto nam obcaecati minima alias perspiciatis deserunt atque rerum illo. Rem neque aliquam iure.</p>
          </div>
          <div className="col-md-3">
            <h1>Number Four</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum perspiciatis magni cumque tenetur deleniti voluptas sed non consectetur ipsum molestias repellat, laborum atque beatae nisi autem eius officiis. Nobis?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forthcomponent
