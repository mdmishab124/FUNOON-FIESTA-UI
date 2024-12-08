import { useResults } from '../../../context/ResultsContext';
import { motion } from 'framer-motion';
import { fadeIn } from '../FrameMotion/variants';
import First from '../../assets/img/medal1.png';
import Second from '../../assets/img/medal2.png';
import Third from '../../assets/img/medal3.png';
import Live from '../../assets/img/live.png';
import Youtube from '../../assets/img/youtube.png';

// Medal mapping
const medalIcons = [First, Third, Second];

const TeamOverview = () => {
    const { results } = useResults();

    // Calculate team scores and sort them
    const calculateTeamPoints = () => {
        const teamPoints = {};
        results.forEach(({ teamName, points }) => {
            teamPoints[teamName] = (teamPoints[teamName] || 0) + points;
        });
        return Object.entries(teamPoints)
            .map(([teamName, totalPoints]) => ({ teamName, totalPoints }))
            .sort((a, b) => b.totalPoints - a.totalPoints);
    };

    const teams = calculateTeamPoints();

    return (
        <div className="mx-auto py-4 lg:py-14 lg:mx-20">
            <div className="flex justify-center items-center flex-col gap-12">
                <motion.section
                    variants={fadeIn('down', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="w-3/4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {teams.map((team, index) => (
                            <div key={index} className="h-12 w-full flex bg-[#B7B7B7] rounded-r-xl">
                                <h1 className="p-2 text-4xl font-extralight groupnumbers">{index + 1}</h1>
                                <div className="w-full bg-secondery h-full flex p-5 rounded-r-xl py-2 justify-between items-center">
                                    <h1 className="text-xl lg:text-3xl font-extralight text-black">
                                        {team.teamName} <span>{team.totalPoints}</span>
                                    </h1>
                                    {medalIcons[index] && (
                                        <img src={medalIcons[index]} alt="Medal" className="h-full w-auto object-contain" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>

            <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex justify-center items-center mt-10 flex-col"
            >
                <div className="w-24 h-24 bg-slate-100 rounded-full mt-16 mb-[-50px] -z-0 flex justify-center items-center">
                    <div className="w-20 h-20 bg-secondery rounded-full">
                        <img src={Live} alt="Live" className="h-full w-auto object-contain p-2" />
                    </div>
                </div>
                <div className="bg-secondery w-full md:w-3/4 h-96 md:h-60 rounded-none md:rounded-2xl flex justify-center py-52 lg:py-40 items-center flex-col md:flex-row gap-8 md:gap-52">
                    <div className="w-52 h-32 bg-white rounded-xl flex items-center justify-center">
                        <img src={Youtube} alt="Youtube" className="h-full w-auto object-contain p-2" />
                    </div>
                    <div className="w-52 h-32 bg-white rounded-xl flex items-center justify-center">
                        <img src={Youtube} alt="Youtube" className="h-full w-auto object-contain p-2" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TeamOverview;
