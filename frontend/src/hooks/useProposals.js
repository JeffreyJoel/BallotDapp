import { useEffect, useState } from "react";
import { getProposalsContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const useProposals = () => {
    const [proposals, setProposal] = useState({
        loading: true,
        data: [],
    });

    useEffect(() => {
        const contract = getProposalsContract(readOnlyProvider);

        contract
            .getAllProposals()
            .then((res) => {
                const converted = res.map((item) => ({
                    name: item.name,
                    voteCount: item.voteCount,
                }));
                setProposal({
                    loading: false,
                    data: converted,
                });
            })
            .catch((err) => {
                console.error("error fetching proposals: ", err);
                setProposal((prev) => ({ ...prev, loading: false }));
            });
    }, []);

    return proposals;
};

export default useProposals;
