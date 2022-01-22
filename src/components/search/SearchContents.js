import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';
import FighterData from './FighterData';

const LoadingWrapper = styled.div`
	background-color: ${ColorCollection.DARK_GRAY};
	font-weight: ${FontWeight.BOLD};
	font-style: italic;
	text-align: center;
	@media all and (max-width: 767px) {
		height: 30px;
		padding: 20px;
		--height: 30px;
		--padding: 20px;
		margin-top: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-bottom: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-left: 40px;
		margin-right: 40px;
		font-size: 20px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		height: 45px;
		padding: 20px;
		--height: 45px;
		--padding: 20px;
		margin-top: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-bottom: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-left: 80px;
		margin-right: 80px;
		font-size: 30px;
	}
	@media all and (min-width: 1081px) {
		height: 60px;
		padding: 20px;
		--height: 60px;
		--padding: 20px;
		margin-top: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-bottom: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-left: 100px;
		margin-right: 100px;
		font-size: 40px;
	}
`;
const ErrorWrapper = styled.div`
	padding: 20px;
	--padding: 20px;
	background-color: ${ColorCollection.DARK_GRAY};
	text-align: center;
	@media all and (max-width: 767px) {
		--min-height: 20px;
		margin-top: calc((100vh - var(--min-height) - 80px - (2 * var(--padding))) / 2);
		margin-bottom: calc((100vh - var(--min-height) - 80px - (2 * var(--padding))) / 2);
		margin-left: 40px;
		margin-right: 40px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		height: 70px;
		--height: 70px;
		margin-top: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-bottom: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-left: 80px;
		margin-right: 80px;
	}
	@media all and (min-width: 1081px) {
		height: 100px;
		--height: 100px;
		margin-top: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-bottom: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
		margin-left: 100px;
		margin-right: 100px;
	}
`;
const ErrorMain = styled.div`
	font-weight: ${FontWeight.BOLD};
	font-style: italic;
	@media all and (max-width: 767px) {
		font-size: 18px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		font-size: 30px;
	}
	@media all and (min-width: 1081px) {
		font-size: 40px;
	}
`;
const ErrorDetails = styled.div`
	font-weight: ${FontWeight.BOLD};
	@media all and (max-width: 767px) {
		font-size: 10px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		font-size: 18px;
	}
	@media all and (min-width: 1081px) {
		font-size: 25px;
	}
`;
const FighterWrapper = styled.div`
	background-color: ${ColorCollection.DARK_GRAY};
	padding: 20px;
	@media all and (max-width: 767px) {
		margin: 40px 10px 40px 10px;
	}
	@media all and (min-width: 768px) and (max-width: 1080px) {
		margin: 60px 20px 60px 20px;
	}
	@media all and (min-width: 1081px) {
		margin: 80px 100px 80px 100px;
	}
`;

const SearchContents = ({ query }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const fighter = qs.parse(query.search, {
					ignoreQueryPrefix: true,
				}).fighter;
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_API}?fighter=${fighter}`
				);
				setData(response.data);
				setLoading(false);
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, [query]);

	if (loading) {
		return <LoadingWrapper>Loading...</LoadingWrapper>;
	} else if (!data) {
		return (
			<ErrorWrapper>
				<ErrorMain>We can't find your fighter</ErrorMain>
				<ErrorDetails>Please check keyword again</ErrorDetails>
			</ErrorWrapper>
		);
	} else {
		return (
			<FighterWrapper>
				<FighterData data={data} />
			</FighterWrapper>
		);
	}
};

export default SearchContents;