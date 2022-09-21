import React from "react";

export default function ArticleInNewsContainer() {
  return (
    <div className="d-flex my-5">
      <img src="" alt="" width="200" height="200" className="me-3" />
      <div className="d-flex flex-column">
        <h1>Lorem ipsum dolor sit</h1>
        <div className="d-flex align-items-center my-2">
          <h4 className="me-4">Szerző</h4>
          <div className="text-mute">2022.01.10.</div>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          nesciunt quae reprehenderit iste quas illo explicabo commodi id
          quidem, obcaecati distinctio minus, soluta eum repellat, dignissimos
          impedit reiciendis quibusdam fuga.
        </div>
      </div>
    </div>
  );
}
