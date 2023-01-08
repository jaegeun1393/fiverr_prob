import React, { Component, createElement } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import Calendar from 'react-calendar';
import { BASELINE } from "../../../util/index";

class View_PaymentReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_data: [{ title: "Website design", describe: "Hi, thank you for working", quantity: 300, price: 1 }],
      num_row: 0,
      num_sub_row: 0,
      total_price: 0,
      addrow_show: "block",
      subtotal: 0,
      subtotal2: 0,
      c_name: "Angie Kim",
      c_email: "angiek@mmtprep.com",
      c_num: "971-256-1284",
      selected_id: "",
      pick_date: "",
      pick_date2: "",
      issue_d: "Click to modify",
      due_d: "Click to modify",
      invocie_num: "",
      c_title: "",
      c_price: "",
      c_des: "",
      class_info: "Suite 116 15160 Northwest Laidiaw Road\nPortiand, Oregon 97229 United States\nAngiek@mmtprep.com Phone: 971-256-2586",
      note: "",
      history: "",
      remains: 0,
      status: 0,
      status_lst: [
        { "id": 0, "name": "Sent" },
        { "id": 1, "name": "Partial pay" },
        { "id": 2, "name": "Dump" },
        { "id": 3, "name": "Due Date passed" },
        { "id": 4, "name": "Paid" }
      ]
    };
    this.preset = this.preset.bind(this);
    this.autocal_total = this.autocal_total.bind(this);
    this.printDocument = this.printDocument.bind(this);
    this.addsubtotal = this.addsubtotal.bind(this);
    this.set_subprice = this.set_subprice.bind(this);
    this.set_subprice2 = this.set_subprice2.bind(this);
  }

  set_subprice = (e) => {
    this.setState({ subtotal: e.target.value });
  };

  set_subprice2 = (e) => {
    this.setState({ subtotal2: e.target.value });
  };

  addsubtotal(ver) {
    //ver == 0 -> add && ver == 1 -> per
    this.setState({ num_sub_row: this.state.num_sub_row + 1 });

    var f_p = 0;
    var td2 = document.createElement("td");

    if (ver == 0) {
      f_p = this.state.subtotal2;
      td2.innerText = "Sub Total: +$" + f_p;
    } else if (ver == 1) {
      f_p = (this.state.subtotal / 100) * this.state.total_price;
      td2.innerText = "Sub Total: (" + this.state.subtotal + "%) $" + f_p;
    }

    td2.id = "sub_total";
    td2.className = "pl-4 py-2 text-right";
    td2.value = parseInt(f_p);
    var main = document.getElementById("subTotal");
    main.innerHTML = "";

    var td = document.createElement("td");
    td.colSpan = "3";

    main.appendChild(td);
    main.appendChild(td2);
    this.autocal_total();
  }

  preset(data) {
    for (let i = 0; i < data.length; i++) {
      var main = document.getElementById("table_item");

      var mtr = document.createElement("tr");
      mtr.className = "item";

      var td1 = document.createElement("td");
      td1.innerText = data[i].title;
      td1.className = "pl-4 py-2 inputStyle flex flex-col";

      var td12input = document.createElement("div");
      td12input.id = i + "_describe";
      td12input.className = "text-xs";
      td12input.innerText = data[i].desc;
      td1.appendChild(td12input);

      var td2 = document.createElement("td");
      td2.innerText = "$ " + data[i].price;
      td2.className = "pl-4 py-2 inputStyle text-center";
      var td2input = document.createElement("input");
      td2input.type = "number";
      td2input.id = i + "_price";
      td2input.value = data[i].price;
      td2input.className = "hidden";
      td2.appendChild(td2input);

      var td3 = document.createElement("td");
      td3.innerText = data[i].quan;
      td3.className = "pl-4 py-2 inputStyle text-center";
      var td3input = document.createElement("input");
      td3input.type = "number";
      td3input.id = i + "_quantity";
      td3input.value = data[i].quan;
      td3input.className = "hidden";
      td3.appendChild(td3input);

      var td4 = document.createElement("td");
      td4.id = i + "_subtotal";
      td4.className = "text-center";
      td4.innerText = "$ " + data[i].quan * data[i].price;

      main.appendChild(mtr);
      mtr.appendChild(td1);
      mtr.appendChild(td2);
      mtr.appendChild(td3);
      mtr.appendChild(td4);
      this.autocal_total();
    }
  }

  async autocal_total() {
    var f_sub_p = 0;
    var num_row = document.getElementsByClassName("item").length;
    for (let i = 0; i < num_row; i++) {
      var main = document.getElementById("table_item").rows[i];
      var quantity = main.getElementsByTagName("td")[1].getElementsByTagName("input")[0].value;
      var price = main.getElementsByTagName("td")[2].getElementsByTagName("input")[0].value;
      f_sub_p += (quantity * price);
    }

    if (document.getElementById("sub_total")) {
      var sub_price = document.getElementById("sub_total").value;
      f_sub_p += sub_price;
    }
    this.setState({ total_price: f_sub_p });
    this.state.total_price = f_sub_p;
  }

  autocal_sub_total = (e) => {
    var num_row = document.getElementsByClassName("item").length;
    for (let i = 0; i < num_row; i++) {
      var main = document.getElementById("table_item").rows[i];
      var quantity = main.getElementsByTagName("td")[1].getElementsByTagName("input")[0].value;
      var price = main.getElementsByTagName("td")[2].getElementsByTagName("input")[0].value;
      main.getElementsByTagName("td")[3].getElementsByTagName("button")[0].innerText = "$ " + (quantity * price);
    }
    this.autocal_total();
  };

  async printDocument() {
    const input = document.getElementById("invoice-box");
    var pdf = new jsPDF('portriat', 'pt', [1000, 770]);

    pdf.html(input,
      {
        "y": -20,
        callback: function (pdf) {
          pdf.save('MMTPrep_Invoice.pdf');
        }
      });
  }

  async bring_invoice(invoice) {
    var data = {
      id: invoice
    }
    var self = this;
    axios.post(BASELINE + "invoice/get/all/by/id", data)
      .then(function (response) {
        self.setState({ invocie_num: response.data.data[0].id });
        self.setState({ class_info: response.data.data[0].title });
        self.setState({ issue_d: response.data.data[0].i_date });
        self.setState({ due_d: response.data.data[0].f_date });
        self.setState({ c_name: response.data.data[0].c_name });
        self.setState({ c_email: response.data.data[0].c_email });
        self.setState({ c_pnum: response.data.data[0].c_num });
        self.setState({ selected_id: response.data.data[0].c_uid });
        self.setState({ note: response.data.data[0].note });
        self.setState({ history: response.data.data[0].paid_history });
        self.setState({ remains: response.data.data[0].Remains });

        const obj = JSON.parse(response.data.data[0].i_lst);
        self.preset(obj);

        if (response.data.data[0].subop == "0") {
          self.setState({ subtotal2: parseInt(response.data.data[0].subp) });
          self.state.subtotal2 = parseInt(response.data.data[0].subp);
        } else {
          self.setState({ subtotal: parseInt(response.data.data[0].subp) });
          self.state.subtotal = parseInt(response.data.data[0].subp);
        }
        self.addsubtotal(parseInt(response.data.data[0].subop));
      })
      .catch(function (error) {
        alert(error);
      });
  }

  componentDidMount() {
    this.bring_invoice(this.props.match.params.invoiceid);
  }

  render() {
    return (
      <div>
        <div className="bg-gray-200 text-gray-800 font-semibold min-h-screen">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row pt-10 rounded-sm gap-10">
              <div className="lg:w-4/12 w-full">
                <div className="flex flex-col gap-7 ">
                  <div className="w-full rounded-xl bg-white shadow-xl">
                    <h3 className="bg-gray-700 w-full text-white text-xl px-2.5 py-1.5 rounded-tr-xl rounded-tl-xl">
                      Invoice Download
                    </h3>
                    <div className="p-3 pb-7">
                      <button
                        type="button"
                        className="text-gray-700 shadow-lg w-full bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-xl px-5 py-1.5 mr-2"
                        onClick={this.printDocument}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[770px] bg-white p-6" id="invoice-box">
                <div className="">
                  <div className="mb-2 border-b border-gray-300">
                    <div className="flex justify-between items-center p-1.5 aligen-left">
                      <div className="mr-3">
                        <img src={require("../../../logo.jpg")} width="100" height="33" alt="logo" />
                      </div>
                      <div className="text-right text-base">
                        <div className="grid grid-rows-1 grid-cols-2">
                          <p className="font-bold text-xl mb-4">Invoice #</p><p className="font-bold text-xl">{this.state.invocie_num}</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                          <span>Issue Date: </span>
                          <button onClick={() => this.showpanel("idp")}>{this.state.issue_d}</button>
                        </p>
                        <p className="text-gray-600 text-sm">
                          <span>Due Date:</span>
                          <button onClick={() => this.showpanel("ddp")}>{this.state.due_d}</button>
                        </p>
                      </div>
                    </div>

                    <div className="hidden w-full rounded-xl bg-white shadow-xl" id="idp">
                      <h3 className="bg-gray-700 w-full text-white text-xl px-2.5 py-1.5 rounded-tr-xl rounded-tl-xl">
                        <p>Issue Date Picker <button className="float-right" onClick={() => this.hidepanel("idp")}>X</button></p>
                      </h3>
                      <div className="p-3 pb-7">
                        <Calendar onChange={this.changeDate} value={this.state.pick_date} />
                      </div>
                    </div>

                    <div className="hidden w-full rounded-xl bg-white shadow-xl" id="ddp">
                      <h3 className="bg-gray-700 w-full text-white text-xl px-2.5 py-1.5 rounded-tr-xl rounded-tl-xl">
                        <p>Due Date Picker <button className="float-right" onClick={() => this.hidepanel("ddp")}>X</button></p>
                      </h3>
                      <div className="p-3 pb-7">
                        <Calendar onChange={this.changeDate2} value={this.state.pick_date2} />
                      </div>
                    </div>

                    <div className="flex items-start p-1.5">
                      <div className="flex-1">
                        <h4 className="text-gray-800 font-bold mb-[4px]">MMT Prep, LLC</h4>
                        <textarea readOnly className="text-xs text-gray-600 w-[250px] min-h-[70px]" value={this.state.class_info} name="class_info" />
                      </div>
                    </div>
                  </div>
                  <div className="text-l md:w-7/12 w-full flex justify-between text-xs mb-7 p-1.5 text-gray-600">
                    <div className="">
                      <p className="mb-[4px]">Bill To : {this.state.c_name}</p>
                      <p>United States</p>
                    </div>
                    <div className=" text-right md:text-left">
                      <p>Additional Customer Info:</p>
                      <p>Address : {this.state.c_email}</p>
                      <p>Phone : {this.state.c_num}</p>
                    </div>
                  </div>
                  <div className="container">
                    <table className="w-full sm:bg-white rounded-lg overflow-hidden">
                      <thead className="bg-gray-200 border-b border-gray-100 rounded-sm">
                        <tr className=" flex-no mb-2">
                          <th className="p-3">Item</th>
                          <th className="p-3">Unit Cost</th>
                          <th className="p-3">Quantity</th>
                          <th className="p-3">Price</th>
                        </tr>
                      </thead>

                      <tbody id="table_item"></tbody>

                      <tfoot>
                        <tr className="total" id="subTotal">

                        </tr>
                      </tfoot>
                    </table>
                    <div className="text-right pl-4 mr-[5px] py-2">Total : $ {this.state.total_price}</div>
                    <div>
                      <p className="text-gray-600 text-lg leading-10">Note:</p>
                      <div>
                        <textarea name="note"
                          className="resize-none w-full rounded-md border-2 border-gray-400 outline-none text-base p-1 placeholder-gray-600"
                          id=""
                          cols="30"
                          rows="7"
                          value={this.state.note}
                          onChange={this.changetext}
                          readOnly
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default View_PaymentReport;
