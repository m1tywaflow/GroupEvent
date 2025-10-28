export default function DateSection() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-8 py-20">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-20 mb-20 font-mono text-sm">
        <div>
          <p className="text-gray-400">Location:</p>
          <p>Green Bay Trail, Glencoe, IL</p>
        </div>
        <div>
          <p className="text-gray-400">Date</p>
          <p>May 12, 2025</p>
        </div>
        <div>
          <p className="text-gray-400">Time</p>
          <p>6AM - NOON</p>
        </div>
      </div>
      <div className="max-w-2xl w-full text-left space-y-10">
        <div>
          <h2 className="text-2xl font-semibold">6am Sunrise Start</h2>
          <ul className="text-sm text-gray-300 list-disc pl-5 mt-1">
            <li>Early bird warm up</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">7am Community Stride</h2>
          <ul className="text-sm text-gray-300 list-disc pl-5 mt-1">
            <li>Start run along the Green Bay Trail</li>
            <li>Water and refreshment stations along the trail</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">10am Partner Showcase</h2>
          <ul className="text-sm text-gray-300 list-disc pl-5 mt-1">
            <li>Booths from supporting businesses and organizations</li>
            <li>Q+A on community improvement projects</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">11am Community Celebration</h2>
          <ul className="text-sm text-gray-300 list-disc pl-5 mt-1">
            <li>Announcements of achievements</li>
            <li>Live events, food vendors and more</li>
          </ul>
        </div>
      </div>
      <button
        className="mt-14 bg-green-400 text-black px-6 py-2 rounded-full font-mono font-semibold hover:bg-green-700 hover:text-white transition
      cursor-pointer"
      >
        REGISTER
      </button>
    </section>
  );
}
