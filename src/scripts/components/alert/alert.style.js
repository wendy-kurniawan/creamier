const alertStyle = `
  :host {
    width: 100%;
  }

  .alert {
    display: block;
    padding: 2rem;
    background-color: #f7dfde;
    border-left: 5px solid #d96652;
    border-radius: 5px;
  }

  .alert ::slotted(p) {
    color: #721c24;
  }
`;

export default alertStyle;
