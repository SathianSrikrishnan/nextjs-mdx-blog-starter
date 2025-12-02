import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/BlogNavbar'
import Newsletter from '@/components/newsletter/Newsletter'

// Force dynamic to prevent prerender issues
export const dynamic = 'force-dynamic'

const MdxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
}

export default MdxLayout
