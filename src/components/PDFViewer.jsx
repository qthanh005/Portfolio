import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useState } from 'react'

const PDFViewer = ({ isOpen, onClose, pdfUrl, fileName }) => {
  const { language } = useLanguage()
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }

  const handleReset = () => {
    setZoom(1)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Check if file is an image
  const isImage = pdfUrl.match(/\.(png|jpg|jpeg|gif|webp)$/i)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed ${isFullscreen ? 'inset-0' : 'inset-4 md:inset-8 lg:inset-12'} z-50 flex flex-col`}
          >
            <div className="relative flex flex-col h-full overflow-hidden rounded-xl border border-gray-200 bg-white backdrop-blur-xl shadow-2xl">
              {/* Header with gradient */}
              <div className="relative bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">
                      {language === 'vi' ? 'Hồ Sơ Cá Nhân' : 'Personal Resume'}
                    </h3>
                    <p className="text-sm text-black">
                      {language === 'vi' ? 'Lê Quang Thành' : 'Le Quang Thanh'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Zoom Controls - Only for images */}
                    {isImage && (
                      <>
                        <div className="hidden sm:flex items-center gap-1 glass-card rounded-lg p-1">
                          <button
                            onClick={handleZoomOut}
                            disabled={zoom <= 0.5}
                            className="p-2 rounded hover:bg-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            title={language === 'vi' ? 'Thu nhỏ' : 'Zoom out'}
                          >
                            <ZoomOut className="w-4 h-4 text-gray-700" />
                          </button>
                          <span className="px-3 text-sm font-mono text-black min-w-[4rem] text-center">
                            {Math.round(zoom * 100)}%
                          </span>
                          <button
                            onClick={handleZoomIn}
                            disabled={zoom >= 3}
                            className="p-2 rounded hover:bg-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            title={language === 'vi' ? 'Phóng to' : 'Zoom in'}
                          >
                            <ZoomIn className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>

                        <button
                          onClick={handleReset}
                          className="hidden sm:block px-3 py-2 glass-card rounded-lg hover:border-black/50 transition-all text-xs text-black hover:text-black"
                          title={language === 'vi' ? 'Đặt lại' : 'Reset zoom'}
                        >
                          {language === 'vi' ? 'Đặt lại' : 'Reset'}
                        </button>
                      </>
                    )}

                    {/* Fullscreen Toggle */}
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 glass-card rounded-lg hover:border-black transition-all group"
                      title={language === 'vi' ? (isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình') : (isFullscreen ? 'Exit fullscreen' : 'Fullscreen')}
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-5 h-5 text-gray-700 group-hover:text-black" />
                      ) : (
                        <Maximize2 className="w-5 h-5 text-gray-700 group-hover:text-black" />
                      )}
                    </button>

                    {/* Download Button */}
                    <button
                      onClick={handleDownload}
                      className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-black/20 transition-all duration-300 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {language === 'vi' ? 'Tải xuống' : 'Download'}
                      </span>
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="p-2 glass-card rounded-lg hover:border-black transition-all group"
                      title={language === 'vi' ? 'Đóng' : 'Close'}
                    >
                      <X className="w-5 h-5 text-gray-700 group-hover:text-black" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-auto bg-gray-100 p-6">
                {isImage ? (
                  <motion.div
                    className="flex items-center justify-center min-h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.img
                      src={pdfUrl}
                      alt="Resume"
                      style={{
                        transform: `scale(${zoom})`,
                        transition: 'transform 0.3s ease-out'
                      }}
                      className="max-w-full h-auto rounded-lg shadow-2xl border border-gray-200"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="%23eee" width="400" height="300"/><text fill="%23666" x="50%" y="50%" text-anchor="middle">Image not found</text></svg>'
                      }}
                    />
                  </motion.div>
                ) : (
                  <iframe
                    src={pdfUrl}
                    className="w-full h-full rounded-lg border border-gray-200"
                    title="PDF Viewer"
                  />
                )}
              </div>

              {/* Mobile Zoom Controls - Fixed at bottom */}
              {isImage && (
                <div className="sm:hidden border-t border-gray-200 bg-gray-50 p-3">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoom <= 0.5}
                      className="p-2 glass-card rounded-lg disabled:opacity-30"
                    >
                      <ZoomOut className="w-5 h-5 text-gray-700" />
                    </button>
                    <span className="px-4 py-2 glass-card rounded-lg text-sm font-mono text-black min-w-[5rem] text-center">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      onClick={handleReset}
                      className="px-3 py-2 glass-card rounded-lg text-xs text-black"
                    >
                      {language === 'vi' ? 'Đặt lại' : 'Reset'}
                    </button>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoom >= 3}
                      className="p-2 glass-card rounded-lg disabled:opacity-30"
                    >
                      <ZoomIn className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PDFViewer
