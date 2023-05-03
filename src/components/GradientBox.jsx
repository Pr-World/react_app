
function GradientBox(childs) {
  console.log(childs)
  return (
    <div className={`${childs.className??''} mt-10 bg-gradient-to-r from-${childs.from} to-${childs.to} w-full h-${childs.height??48} -skew-y-${childs.skewY??6} flex justify-center items-center`}>
      {childs.children}
    </div>
  )
}

export default GradientBox