import { Component } from "react";
import fetch from "axios";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";
import NavBarComponent from './Navbar'
function RenderMenuItem({ inno, onClick }) {
  return (
    
    <Card key={inno._id}>
      <CardImg
        width="400px"
        height="400px"
        src={inno.img}
        alt={inno.headLine}
      />
      <CardBody>
        <CardTitle>
            <Link to="/inno_details" state={{innoItem:inno}}>
                <b>{inno.headline}</b>
            </Link>
        </CardTitle>
        <CardText>{inno.body}</CardText>
        <div className="row">
          <div className="col-12">
            <CardText>{inno.timestamp}</CardText>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

class Innovation extends Component {
  constructor(state) {
    super(state);
    this.state = {
      data: [],
      isLoading: true,
      page: 1,
    };
  }

  getData = async (page) => {
    await fetch(
      "https://jiobackend.herokuapp.com/api/innovation/all/" + page
    ).then((res) => {
      const data = res;
      this.setState({ data: data.data, isLoading: false });
    });
  };

  changePage = (incr) => {
    if (incr) {
      this.setState({ page: this.state.page + 1, isLoading: true }, () => {
        this.getData(this.state.page + 1);
      });
    } else {
      this.setState({ page: this.state.page - 1, isLoading: true }, () => {
        this.getData(this.state.page - 1);
      });
    }
  };
  componentDidMount() {
    this.getData(this.state.page);
  }

  render() {
    const menu = Object.keys(this.state.data).map((key) => {
      const innovations = this.state.data[key];
      return (
        <div className="col-sm-6 mr-2 mt-1 mb-2">
          <RenderMenuItem inno={innovations} />
        </div>
      );
    });
          // <div className="col-4 d-flex justify-content-start">
          //   <button
          //     onClick={() => this.changePage(false)}
          //     className={`btn btn-danger p-2 ${
          //       this.state.page == 1 || this.state.isLoading ? "disabled" : ""
          //     }`}
          //   >
          //     Previous
          //     {/* <span className="fa fa-minus"></span> */}
          //   </button>
          // </div>
          // <div className="col-4  d-flex justify-content-end">
          //   {/* <span className="p-2">{this.state.page}</span> */}
          //   <button
          //     onClick={() => this.changePage(true)}
          //     className={`btn btn-success p-2 ${
          //       this.state.data.length == 0 || this.state.isLoading
          //         ? "disabled"
          //         : ""
          //     }`}
          //   >
          //     Next
          //     {/* <span className="fa fa-plus"></span> */}
          //   </button>
          // </div>
    return (
      <>
        <NavBarComponent />
        <div>
          <div className="row pt-3 pb-3 justify-content-center">
            <div className="col-4 d-flex  justify-content-center">
              <h4 className="pr-2">Innovation</h4>
            </div>
          </div>

          {this.state.isLoading ? (
            <Loading></Loading>
          ) : (
            <div className="row h-100">{menu}</div>
          )}
          {this.state.data.length == 0 && !this.state.isLoading ? (
            <div className="row pt-5">
              <h1>You've reached the end!</h1>
            </div>
          ) : (
            ""
          )}
          {this.state.isLoading ? (
            ""
          ) : (
            <div className="row pt-3 pb-3">
              <div className="col-4 d-flex justify-content-start">
                <button
                  onClick={() => this.changePage(false)}
                  className={`btn btn-danger p-2 ${
                    this.state.page == 1 || this.state.isLoading
                      ? "disabled"
                      : ""
                  }`}
                >
                  Previous
                  {/* <span className="fa fa-minus"></span> */}
                </button>
              </div>
              <div className="col-4 d-flex  justify-content-center">
                {/* <h4 className="pr-2">Innovation</h4> */}
              </div>
              <div className="col-4  d-flex justify-content-end">
                {/* <span className="p-2">{this.state.page}</span> */}
                <button
                  onClick={() => this.changePage(true)}
                  className={`btn btn-success p-2 ${
                    this.state.data.length == 0 || this.state.isLoading
                      ? "disabled"
                      : ""
                  }`}
                >
                  Next
                  {/* <span className="fa fa-plus"></span> */}
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Innovation;
