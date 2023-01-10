import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi';
import "./Footer.css"

export function FooterContainer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">

                    <div class="footer-col">
                        <h4>eduLink</h4>
                        <ul>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Payment Options</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>contact us</h4>
                        <ul>
                            <li><a href="#"><FaPhoneAlt /> 0311-7278305</a></li>
                            <li><a href="#"><FiMail />  edulink@gmail.com</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >

    )
}