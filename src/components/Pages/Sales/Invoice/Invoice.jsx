import InvoiceTools from "../InvoiceTools/InvoiceTools";
import Pagination from "../Pagination/Pagination";
import Steps from "../Steps/Steps";
import { Link } from "react-router-dom";
import "./Invoice.css"

function Invoice() {
  return (
    <div>
      <div className=" w-full m-0">
        <div className="w-full h-11 rounded-t-lg bg-base-300 flex justify-end items-center mb-2 ">
          <span className="w-5 h-5 ml-2 rounded-full bg-red-400 text-stone-900 flex  items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
          <span className="w-5 h-5 ml-2 rounded-full bg-yellow-400 text-stone-900 flex  items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-counterclockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
            </svg>
          </span>
          <span className="w-5 h-5 ml-2 rounded-full bg-green-400 text-stone-900 flex  items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between px-2">
        <Link to="/add">
          <button className="btn btn-success hover:animate-pulse">
            ثبت فاکتور جدید
          </button>
        </Link>
        <Pagination />
      </div>
      
      <div className="flex px-2">
        <table className="table overflow-scroll text-right">
          <thead className="text-center">
            <tr>
              <th>شماره فاکتور</th>
              <th>نام مشتری</th>
              <th>تاریخ ثبت</th>
              <th>مبلغ</th>
              <th>وضعیت جاری</th>
              <th>ابزارها</th>
              <th>کارمند فروش</th>
            </tr>
          </thead>
          <tbody>
           
          
            <tr className="hover">
              <th>1002</th>
              <td>حسن زاده</td>
              <td>1399/10/11 16:50</td>
              <td>200,000</td>
              <td>
                <Steps />
              </td>
              <td>
                <InvoiceTools />
              </td>
              <td>علی زاده</td>
            </tr>
            <tr className="hover">
              <th>1002</th>
              <td>حسن زاده</td>
              <td>1399/10/11 16:50</td>
              <td>200,000</td>
              <td>
                <Steps />
              </td>
              <td>
                <InvoiceTools />
              </td>
              <td>علی زاده</td>
            </tr>
            <tr className="hover">
              <th>1002</th>
              <td>حسن زاده</td>
              <td>1399/10/11 16:50</td>
              <td>200,000</td>
              <td>
                <Steps />
              </td>
              <td>
                <InvoiceTools />
              </td>
              <td>علی زاده</td>
            </tr>
            <tr className="hover">
              <th>1002</th>
              <td>حسن زاده</td>
              <td>1399/10/11 16:50</td>
              <td>200,000</td>
              <td>
                <Steps />
              </td>
              <td>
                <InvoiceTools />
              </td>
              <td>علی زاده</td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Invoice;
