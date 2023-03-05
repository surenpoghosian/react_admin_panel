import React from 'react'
import { DatePicker, Button } from 'components/ui'

const ClearButton = () => {
	return (
		<div className="flex flex-col gap-5">
			<div>
				<div className="mb-1 font-semibold text-sm">No clear button:</div>
				<DatePicker defaultValue={new Date()} clearable={false} />
			</div>
			<div>
				<div className="mb-1 font-semibold text-sm">Custom clear button:</div>
				<DatePicker 
					defaultValue={new Date()} 
					clearButton={
						<Button size="xs">Clear</Button>
					} 
				/>
			</div>
		</div>
	)
}

export default ClearButton