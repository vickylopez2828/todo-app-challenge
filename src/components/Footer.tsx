
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-black py-16 mt-8 text-center text-sm text-gray-400">
      <p>Challenge Minddev Perú · © {year} Victoria López</p>
    </div>
  )
}

export default Footer
