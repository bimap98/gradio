const label_output = {
  html: `
    <div class="output_class"></div>
    <div class="confidence_intervals">
      <div class="labels"></div>
      <div class="confidences"></div>
    </div>
    `,
  init: function() {},
  output: function(data) {
    data = JSON.parse(data)
    this.target.find(".output_class").html(data["label"])
    this.target.find(".confidence_intervals > div").empty()
    if (data.confidences) {
      for (var i = 0; i < data.confidences.length; i++)
      {
        let c = data.confidences[i]
        let label = c["label"]
        let confidence = (c["confidence"] * 100).toFixed(1) + "%";
        this.target.find(".labels").append(`<div class="label" title="${label}">${label}</div>`);
        this.target.find(".confidences").append(`
          <div class="confidence" style="width: ${confidence}" title="${confidence}">${confidence}</div>`);
      }
    }
  },
  submit: function() {
    this.target.find(".output_class").html("<img src='static/img/logo_loading.gif'>")
  },
  clear: function() {
    this.target.find(".output_class").empty();
    this.target.find(".confidence_intervals > div").empty();
  }
}
