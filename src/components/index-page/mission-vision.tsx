export default function MissionVision() {
  return (
    <section
      id="mission"
      className="bg-gradient-to-br from-amber-50 to-yellow-50 py-16 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/image/obedi-image.png"
              alt="Mission Vision Graphic"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="sticky top-6 md:top-8 lg:top-16 self-start h-fit">
            <div className="space-y-20">
              <div className="space-y-6">
                <h3 className="text-5xl font-semibold text-yellow-900">
                  Mission
                </h3>
                <p className="text-yellow-700">
                  To provide male residents with behavioral health needs a safe,
                  structured, and compassionate environment where dignity,
                  stability, and personal growth are supported every day.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-5xl font-semibold text-yellow-900">
                  Vision
                </h3>
                <p className="text-yellow-700">
                  To create a community where male residents living with
                  behavioral health challenges are empowered to thrive—supported
                  by care that values respect, privacy, and connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
