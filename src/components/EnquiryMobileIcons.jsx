import React, { Component } from 'react'
import styled from 'styled-components'

class EnquiryMobileIcons extends Component {
    render() {
        return (
            <Wrapper>
                <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="16" y1="15" x2="144" y2="15" stroke="#BCC1C3" strokeWidth="2" />
                    <circle cx="16" cy="16" r="15.5" fill={this.props.firstBack ? this.props.firstBack : "white"} stroke="#0F6B5C" />
                    <path d="M16.8 7.656L11.616 9.408V10.632L15.024 10.128L15.24 10.416V22.224L14.952 22.656L12.552 22.8V24H20.88V22.8L18.624 22.704L18.36 22.32V7.656H16.8Z" fill={this.props.firstFront ? this.props.firstFront : "#0F6B5C"} />
                    <circle cx="80" cy="16" r="15.5" fill={this.props.secondBack ? this.props.secondBack : "white"} stroke="#0F6B5C" />
                    <path d="M77.152 21.552C82.48 17.928 85.264 15.36 85.264 12.288C85.264 9.504 83.224 7.608 80.008 7.608C76.552 7.608 74.368 9.288 74.368 11.28C74.368 12.288 75.04 12.96 76.096 12.96C76.576 12.96 77.08 12.816 77.608 12.528V9.432C78.088 9.24 78.568 9.144 79 9.144C80.824 9.144 81.952 10.368 81.952 12.504C81.952 15.504 79.216 18.168 74.152 22.104V24H85.768V19.44H84.304L83.872 21.552H77.152Z" fill={this.props.secondFront ? this.props.secondFront : "#0F6B5C"} />
                    <circle cx="144" cy="16" r="15.5" fill={this.props.thirdBack ? this.props.thirdBack : "white"} stroke="#0F6B5C" />
                    <path d="M145.016 15.528C147.608 14.928 148.952 13.584 148.952 11.688C148.952 9.36 146.936 7.632 143.744 7.632C140.48 7.632 138.392 9.216 138.392 10.944C138.392 11.904 139.088 12.6 140.12 12.6C140.624 12.6 141.008 12.504 141.392 12.264V9.456C141.872 9.264 142.328 9.168 142.736 9.168C144.488 9.168 145.712 10.344 145.712 12.024C145.712 13.872 144.44 14.976 142.184 14.976C141.968 14.976 141.728 14.976 141.488 14.952V16.68C142.136 16.584 142.64 16.56 142.976 16.56C145.016 16.56 146.288 17.76 146.288 19.512C146.288 21.384 144.896 22.848 143.072 22.848C142.592 22.848 142.04 22.728 141.416 22.488L140.648 19.896C140.288 19.776 140 19.704 139.712 19.704C138.68 19.704 138.008 20.328 138.008 21.264C138.008 22.848 139.904 24.264 142.856 24.264C146.984 24.264 149.552 22.08 149.552 19.368C149.552 17.184 147.944 15.744 145.016 15.528Z" fill={this.props.thirdFront ? this.props.thirdFront : "#0F6B5C"} />
                </svg>
            </Wrapper>
        )
    }
}
export default EnquiryMobileIcons

const Wrapper = styled.div`
    display: none;
    @media(max-width: 1024px){
        height: 32px;
        display: block;
        padding: 14px 16px;
        float: right;
    }
`