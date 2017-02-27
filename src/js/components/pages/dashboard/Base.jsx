import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import Truncate from 'react-truncate'

import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
// import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Anchor from 'grommet/components/Anchor'
import Search from 'grommet/components/Search'
import Header from 'grommet/components/Header'
// import Actions from 'grommet/components/icons/base/Actions'

export default CSSModules(class extends Component {
    static propTypes = {
    }
    render () {
        return (
            <div>
                <Header>
                  <Title>
                      InternLens
                  </Title>
                  <Box flex={true}
                    justify='end'
                    direction='row'
                    responsive={false}>
                    <Search inline={true}
                      fill={true}
                      size='small'
                      placeHolder='Search'
                      dropAlign={{'right': 'right'}} />
                    {/* <Menu icon={<Actions />}
                      dropAlign={{'right': 'right'}}>
                      <Anchor href='#'
                        className='active'>
                        First
                      </Anchor>
                      <Anchor href='#'>
                        Second
                      </Anchor>
                      <Anchor href='#'>
                        Third
                      </Anchor>
                    </Menu> */}
                  </Box>
                </Header>
                {
                    this.props.Intern.list.map((intern, id) =>
                        <Card key={id} heading={intern['你之前去哪實習呢？']}
                            // description={<Truncate lines={100} ellipsis={<span>...</span>}>{intern['可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)']}</Truncate>}
                            description={intern['可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)']}
                            headingStrong={false}
                            link={<Anchor href='#'
                            label='查看心得全文' />} />
                    )
                }
            </div>
        )
    }
})
