import React, { Component } from 'react';
class Social extends Component {
  render() {
    return (
      <div class="social">
        <a href="https://github.com/davmcgregor" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/david-mcgregor-49b2a361/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://blog.makersacademy.com/tips-to-max-your-learning-5e363517acfb" target="_blank"><i class="fab fa-medium-m"></i></a>
        <a href="mailto:davidjohnmcgregor@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
        <a href="https://github.com/davmcgregor/CV/raw/master/David_McGregor_CV.pdf"><i class="far fa-file"></i></a>
      </div>
    )
  }
}

export default Social