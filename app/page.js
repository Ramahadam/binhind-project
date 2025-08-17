import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-h40 font-bold">Lorem Ipsum  </h1>
        <h2 className="text-h42 font-bold">Heading 2</h2>
        <h3 className="text-h22 font-medium">Heading 3</h3>
        <p className="text-p18">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{' '}
        </p>

        <button className="text-p18">Read More</button>
        <a href="#">Link</a>
        <span>Socail media icon</span>
      </div>
    </div>
  );
}
