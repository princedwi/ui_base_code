import Barchart from "@/components/charts/barchart";
import Piechart from "@/components/charts/piechart";
import Map from "@/components/map";
import Head from "next/head";

export default function Approvals() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body text-center text-warning">
              <div className="chart-wrapper">
                <Barchart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body text-center text-warning">
              <div className="chart-wrapper">
                <Piechart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body text-center text-warning">
              <div className="chart-wrapper">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
