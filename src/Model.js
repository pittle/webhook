import React from 'react';

export default function Model(props) {
  var defaultProps = {
    bg: 'rgba(0,0,0,.5)',
  };
  var datas = Object.assign({}, defaultProps, props);

  return (
    <div
      className="model"
      style={{
        background: datas.bg,
      }}
      onClick={(e) => {
        if (e.target.className === 'model') {
          datas.onClose();
        }
      }}
    >
      <div className="model-center">{datas.children}</div>
    </div>
  );
}
