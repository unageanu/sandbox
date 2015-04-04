
export default {

    getInitialState(){
        return {status:"normal"};
    },

    className() {
      return this.state.status;
    },

    touch() {
      const newStatus = this.state.status == "back" ? "normal" : "back";
      this.setState({status:newStatus});
    }
};
