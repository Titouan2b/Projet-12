import React from 'react'

export default function ProgressBar(props){
        const { bgcolor, completed } = props;

        const containerStyles = {
            height: 10,
            width: '100%',
          }
        

        const fillerStyles = {
            height: '100%',
            width: `${completed}%`,
            backgroundColor: bgcolor,
            transition: 'width 1s linear infinite'
          }

        
        return (
          <div style={containerStyles}>
            <div style={fillerStyles}>
            </div>
          </div>
        );
      };