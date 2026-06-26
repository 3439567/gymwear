import './ReelModal.css';

function ReelModal({ reel, onClose }) {

  if (!reel) return null;

  return (
    <div className="modal-overlay">

      <button
        className="close-btn"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="modal-content">

        <video
          src={reel.video}
          controls
          autoPlay
          loop
          className="reel-video"
        />

        <div className="product-box">

          <img
            src={reel.productImage}
            alt={reel.title}
          />

          <h3>{reel.title}</h3>

          <p>₹{reel.price}</p>

          <button>
            ADD TO BAG
          </button>

        </div>

      </div>

    </div>
  );
}

export default ReelModal;