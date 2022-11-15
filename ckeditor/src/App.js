import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import axios from "axios";
import { CLIENT_URL, BASELINE } from "./util";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_article_id: "",
      title: "",
      title_img: "",
      title_img_loc: "",
      context: "",
      subject: "",
      date: "",
    };
    this.uploadAdapter = this.uploadAdapter.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            body.append("aid", this.state.blog_article_id);
            axios.post(BASELINE + "blog/upload/image", body)
              .then(function (response) {
                console.log(response.data.link);
                resolve({ default: `${CLIENT_URL}/${response.data.link}` });
              })
              .catch(function (error) {
                reject(error);
              });
          });
        });
      },
    };
  }

  handleChangeImage = (e) => {
    this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
    this.setState({ title_img_loc: e.target.files[0] });
  };


  render() {
    return (
      <div className="App">
        <CKEditor
          editor={DecoupledEditor}
          //data={blogDetail}
          onReady={(editor) => {
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );

            editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
              return this.uploadAdapter(loader);
            };
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            //console.log({ event, editor, data });
            this.setState({ context: data });
          }}
          onBlur={(event, editor) => {
            //  console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            //  console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;
