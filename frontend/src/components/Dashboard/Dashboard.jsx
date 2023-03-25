import React, { Fragment } from 'react';
const Dashboard = () => {

  return (
    <Fragment>
      <div className="container">
        <div className="row">

          <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="animated fadeInUp">Total 00</h5>
                <h6 className="text-secondary animated fadeInUp">00</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;