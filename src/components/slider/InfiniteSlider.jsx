import './InfiniteSlider.css';
import logo from './3m.svg';

const logos = [
    logo,
    logo,
    logo,
    logo
];

// Create a mirrored array of logos
const mirroredLogos = [...logos, ...[...logos].reverse()];

const InfiniteSlider = () => {
    return (
        <div className="overflow-hidden py-15 bg-white relative">
            <div className="absolute top-0 left-0 w-64 h-full z-20 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-full z-20 bg-gradient-to-l from-white to-transparent"></div>
            <div className="whitespace-nowrap animate-slide">
                {mirroredLogos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index + 1}`} className="inline-block h-12 mx-10" />
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;