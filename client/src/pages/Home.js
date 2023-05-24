import React from 'react';
import Love from "../components/Love";
import Hate from "../components/Hate"

function Home(props) {
    return (
        <div class="container">
            <div class="row">
                <div class="col border text-center">
                    1 of 2
                        <Love/>
                    <br />
                </div>
                <div class="col border text-center">
                    2 of 2
                        <Hate/>
                </div>
            </div>
        </div>

    )
};

export default Home;