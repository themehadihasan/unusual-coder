import React from "react";
import HeroSectionAll from "../aboutus/HeroSectionAll";
import './ConnectWithMe.css'

function ConnectWithMe() {

    return (
        <div className="container-lg">
            <HeroSectionAll heading="Connect With Me" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            <div className="row text-center">
                <div class="card-body">
                    <h4 class="card-title mt-1">If you have any query feel free to connect with me</h4>
                    <p class="card-text mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. text below as a natural lead-in to additional.</p>
                </div>
            </div>
            <div class="row justify-content-center mt-4 mb-4">
                <div class="col-lg-8">
                    <form action="" class="row g-3">
                        <div class="form-group col-lg-6">
                        <input type="text" id="first-name" name="first-name" class="form-control" autocomplete="off" placeholder="Full Name" required />
                        </div>

                        <div class="form-group col-lg-6">
                        <input type="text" id="last-name" name="last-name" class="form-control" autocomplete="off" placeholder="City" />
                        </div>

                        <div class="form-group col-lg-6">
                        <input type="email" id="email" name="email" class="form-control" autocomplete="off" placeholder="Email id" required />
                        </div>

                        <div class="form-group col-lg-6">
                        <input type="tel" id="mobile" name="mobile" class="form-control" autocomplete="off" placeholder="Mobile No." required />
                        </div>

                        <div class="form-group col-lg-12">
                        <textarea name="message" id="message" row="5" class="form-control" autocomplete="off" placeholder="Message (Query)" required></textarea>
                        </div>

                        <div class="form-group col-lg-12">
                        <button type="submit" class="button pt-1 pb-1 ps-3 pe-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ConnectWithMe;