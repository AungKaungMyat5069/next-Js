import Image from "next/image";

export default function Home() {

  const imagesObj = [
    {id: 1, srcUrl: "https://picsum.photos/200/300"},
    {id: 2, srcUrl: "https://picsum.photos/200/301"},
    {id: 3, srcUrl: "https://picsum.photos/200/302"},
    {id: 4, srcUrl: "https://picsum.photos/200/303"},
    {id: 5, srcUrl: "https://picsum.photos/200/304"},
    {id: 6, srcUrl: "https://picsum.photos/200/305"},
    {id: 7, srcUrl: "https://picsum.photos/200/306"},
    {id: 8, srcUrl: "https://picsum.photos/200/307"}
  ];


  return (
    <>
      {/* Main Popular */}
      <section id="icons p-3">
        <div className="container">
            <h1 className="text-center my-3">Books For All</h1>
            <div className="row">
                <div className="col-md-4">
                    <Image width={480} height={360} src="/images/icons/campfire.png" className="img-fluid" alt=""/>
                    <h3 className="text-center">Dream Big Dreams</h3>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, impedit, quaerat.
                        Earum hic itaque maxime quae quaerat, quam quas quo?</p>
                </div>
                <div className="col-md-4">
                    <Image  width={480} height={360} src="/images/icons/tent.png" className="img-fluid" alt=""/>
                    <h3 className="text-center">Chase Your Dreams</h3>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, impedit, quaerat.
                        Earum hic itaque maxime quae quaerat, quam quas quo?</p>
                </div>
                <div className="col-md-4">
                    <Image width={480} height={360} src="/images/icons/nature.png" className="img-fluid" alt=""/>
                    <h3 className="text-center">Do What You Want!</h3>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, impedit, quaerat.
                        Earum hic itaque maxime quae quaerat, quam quas quo?</p>
                </div>
            </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="bestsellers">
        <div className="container mt-3 p-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow rounded">
                        <Image  width={480} height={360} src="/images/cover/a-pale.jpg"
                              className="card-img-top"
                             alt=""/>
                        <div className="card-body">
                          <div className="card-title">A Pale View of Hills</div>
                          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur delectus et explicabo neque numquam!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow rounded">
                        <Image width={480} height={360} src="/images/cover/a-tale.jpg"
                             className="card-img-top"
                             alt=""/>
                        <div className="card-body">
                            <div className="card-title">A Tale of Two Cities</div>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur delectus et explicabo neque numquam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Book Images */}
      <section id="images">
        <div className="container mt-3 p-3">
            <div className="row">
                <div className="col mb-3" 
                     >
                      {
                        imagesObj.map((image) => (
                          <Image key={image.id} width={200} height={200} src={image.srcUrl} className="img-fluid rounded shadow m-2" alt=""/>
                        ))
                      }
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
