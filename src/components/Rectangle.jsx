export default function Rectangle({ forwardedRef }) {
  return (
    <div className="rectangle-frame" ref={forwardedRef}>
      <div className="rectangle"></div>
    </div>
  )
}